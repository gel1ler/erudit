import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const access_token = process.env.ACCESS_TOKEN2
    const group_id = process.env.GROUP_ID

    try {
        const response = await fetch(`https://api.vk.com/method/wall.get?owner_id=-${group_id}&count=3&access_token=${access_token}&offset=0&v=5.199`, { next: { revalidate: 3600 } })
        const data = await response.json();

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