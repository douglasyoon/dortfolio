import mongoDB from '@/lib/mongoDB';
import { NextResponse } from 'next/server';
import { COLLECTION_SKILLS } from '@/lib/constant';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');

  const res = await (await mongoDB(COLLECTION_SKILLS))
    .find({ type: type })
    .sort({ order: 1 })
    .toArray();

  return NextResponse.json({ status: 200, list: res });
}
