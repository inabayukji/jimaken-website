import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const pathSegments = params.path || [];
    const filePath = path.join(process.cwd(), 'mcp-replicate-flux', 'output', ...pathSegments);

    // ファイルが存在するか確認
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }

    // ファイルの内容を読み込む
    const fileData = fs.readFileSync(filePath);
    
    // ファイルのMIMEタイプを判定
    let contentType = 'application/octet-stream';
    if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
      contentType = 'image/jpeg';
    } else if (filePath.endsWith('.png')) {
      contentType = 'image/png';
    }

    // レスポンスを返す
    return new NextResponse(fileData, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    console.error('Error serving MCP image:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 