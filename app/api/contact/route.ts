import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // FormDataを取得
    const formData = await request.formData();
    console.log("API route received form data:", Object.fromEntries(formData.entries()));
    
    // 必須フィールドの検証
    const name = formData.get('name') || formData.get('company-name') || formData.get('seeker-name');
    const email = formData.get('email') || formData.get('company-email') || formData.get('seeker-email');
    const phone = formData.get('phone') || formData.get('company-phone') || formData.get('seeker-phone');
    const message = formData.get('message') || formData.get('company-message') || formData.get('seeker-message');
    
    // 資格情報を取得
    const certifications: string[] = [];
    for (let i = 1; i <= 11; i++) {
      const certKey = `cert${i}`;
      if (formData.get(certKey) === 'on') {
        // cert1 = "1級建築施工管理技士" のように、対応する資格名をマッピング
        const certMap: {[key: string]: string} = {
          'cert1': '1級建築施工管理技士',
          'cert2': '1級土木施工管理技士',
          'cert3': '1級電気工事施工管理技士',
          'cert4': '2級建築施工管理技士',
          'cert5': '2級土木施工管理技士',
          'cert6': '2級電気工事施工管理技士',
          'cert7': '一級建築士',
          'cert8': '二級建築士',
          'cert9': '1級土木技術者資格',
          'cert10': '建築設備士',
          'cert11': 'その他'
        };
        certifications.push(certMap[certKey] || certKey);
      }
    }

    if (!name || !phone || !message) {
      const missingFields = [];
      if (!name) missingFields.push('名前');
      if (!phone) missingFields.push('電話番号');
      if (!message) missingFields.push('お問い合わせ内容');
      
      console.error('Missing required fields:', missingFields);
      return NextResponse.json(
        { success: false, message: `必須項目が入力されていません: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // フォームのタイプを確認（企業または求職者）
    const formType = formData.get('formType');
    const inquiryType = formData.get('inquiryType') || '未選択';
    const employmentStatus = formData.get('employmentStatus') || '未選択';
    
    // Slackに送信するメッセージを作成
    let slackMessage = `*新しいお問い合わせ*\n\n`;
    slackMessage += `*フォームタイプ*: ${formType === 'company' ? '企業' : '求職者'}\n`;
    slackMessage += `*お問い合わせ種別*: ${inquiryType}\n`;
    
    if (formType === 'company') {
      slackMessage += `*企業名*: ${formData.get('companyName') || '未入力'}\n`;
    } else {
      slackMessage += `*現在の就業状況*: ${employmentStatus}\n`;
      if (certifications.length > 0) {
        slackMessage += `*保有資格*: ${certifications.join(', ')}\n`;
      }
    }
    
    slackMessage += `*お名前*: ${name}\n`;
    slackMessage += `*電話番号*: ${phone}\n`;
    if (email) slackMessage += `*メールアドレス*: ${email}\n`;
    slackMessage += `*お問い合わせ内容*:\n${message}`;
    
    console.log("Sending to Slack:", slackMessage);

    // Webhook URLが設定されていない場合はエラーを返す
    const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
    
    if (!SLACK_WEBHOOK_URL) {
      console.error('SLACK_WEBHOOK_URL is not set');
      return NextResponse.json(
        { success: false, message: 'サーバー設定エラー: Slack Webhook URLが設定されていません' },
        { status: 500 }
      );
    }

    // Slackに送信
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: slackMessage,
      })
    });
    
    if (!response.ok) {
      console.error('Failed to send message to Slack:', await response.text());
      return NextResponse.json(
        { success: false, message: 'Slackへの通知に失敗しました。しばらくしてからお試しください。' },
        { status: 500 }
      );
    }
    
    console.log('Message sent to Slack successfully');

    return NextResponse.json(
      { success: true, message: 'お問い合わせありがとうございます。担当者より連絡いたします。' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { success: false, message: 'お問い合わせの送信中にエラーが発生しました。しばらくしてからお試しください。' },
      { status: 500 }
    );
  }
} 