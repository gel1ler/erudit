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
        const params = {
            Bucket: 'erudit',
            Delimiter: '/',
        }

        const command = new ListObjectsV2Command(params);
        const result = await s3Client.send(command);
        const folders = result.CommonPrefixes?.map(prefix => prefix.Prefix?.replace(/\/$/, '')) || [];

        const filteredFolders = folders.filter(folder => folder !== "Главная страница");

        // Получаем фотографии для каждой папки
        const folderPhotos = await Promise.all(filteredFolders.map(async (folder) => {
            const folderParams = {
                Bucket: 'erudit',
                Prefix: folder,
            };

            const folderCommand = new ListObjectsV2Command(folderParams);
            const folderResult = await s3Client.send(folderCommand);

            const photos = folderResult.Contents?.filter(item => item.Key && !item.Key.endsWith('/'))
                .map(item => `https://erudit.hb.ru-msk.vkcloud-storage.ru/${item.Key}`) || [];

            return {
                folder,
                photos,
            };
        }));
        return NextResponse.json({ folders: filteredFolders, folderPhotos });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to fetch photos' }, { status: 500 });
    }
}