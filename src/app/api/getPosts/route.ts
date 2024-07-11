import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const access_token = process.env.ACCESS_TOKEN
    const group_id = process.env.GROUP_ID

    try {
        console.log(`https://api.vk.com/method/wall.get?owner_id=-${group_id}&count=3&access_token=${access_token}&v=5.199`)
        const response = await fetch(`https://api.vk.com/method/wall.get?owner_id=-${group_id}&count=3&access_token=${access_token}&v=5.199`);
        const data = await response.json();

        if (data.response) {
            return NextResponse.json(data.response)
        } else {
            return NextResponse.json({ msg: 'error' })
        }
    } catch (error) {
        return NextResponse.json({ error })
    }
}