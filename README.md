This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Slack連携の設定

問い合わせフォームからの送信内容をSlackに通知するためには、以下の手順で設定を行ってください：

1. Slackアプリを作成する：
   - [Slack API](https://api.slack.com/apps)にアクセスし、「Create New App」をクリック
   - 「From scratch」を選択し、アプリ名とワークスペースを設定

2. Incoming Webhookを有効化する：
   - 左メニューの「Incoming Webhooks」をクリック
   - 「Activate Incoming Webhooks」をONに切り替え
   - 「Add New Webhook to Workspace」をクリック
   - 通知を送信するチャンネルを選択して「許可する」をクリック

3. Webhook URLを設定する：
   - 生成されたWebhook URLをコピー
   - プロジェクトのルートディレクトリに`.env.local`ファイルを作成し、以下の形式で追加：
   ```
   SLACK_WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
   ```
   - 実際のWebhook URLに置き換えてください

4. 開発サーバーを再起動する：
   - 変更を反映させるために、開発サーバーを再起動してください
