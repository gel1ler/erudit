import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const access_token = process.env.ACCESS_TOKEN2
    const group_id = process.env.GROUP_ID
    const url = new URL(req.url);
    const count = url.searchParams.get('count') || 3;
    const offset = url.searchParams.get('offset') || 0;

    try {
        const response = await fetch(`https://api.vk.com/method/wall.get?owner_id=-${group_id}&offset=${offset}&count=${count}&access_token=${access_token}&v=5.199`, { next: { revalidate: 3600 } })
        const data = await response.json()

        if (data.response) {
            return NextResponse.json(data.response)
        } else {
            return NextResponse.json({
                msg: 'error',
                data
            })
        }
    } catch (error) {
        return NextResponse.json({ error })
    }
}