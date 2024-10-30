import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';

const s3Client = new S3Client({
    region: 'ru-msk',
    endpoint: 'https://hb.bizmrg.com',
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_BUCKET_ACCESS_KEY || '',
        secretAccessKey: process.env.NEXT_PUBLIC_BUCKET_SECRET_KEY || '',
    },
});

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const folder = searchParams.get('folder') || '';

        const params = {
            Bucket: 'erudit',
            Prefix: folder,
        }

        const command = new ListObjectsV2Command(params);
        const result = await s3Client.send(command);

        const photos = result.Contents?.map(item => ({
            url: `https://erudit.hb.ru-msk.vkcloud-storage.ru/${item.Key}`,
            key: item.Key,
        })) || [];

        return NextResponse.json(photos);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to fetch photos' }, { status: 500 });
    }
}