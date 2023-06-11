import mongoDB from '@/lib/mongoDB';
import { NextResponse } from 'next/server';
import { COLLECTION_PROJECTS } from '@/lib/constant';

export async function GET() {
  const res = await (await mongoDB(COLLECTION_PROJECTS))
    .find({ type: 'personal' })
    .sort({ started_date: -1 })
    .toArray();

  return NextResponse.json({ status: 200, list: res });
}
