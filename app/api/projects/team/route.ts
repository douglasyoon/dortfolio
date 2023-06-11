import { NextResponse } from 'next/server';
import mongoDB from '@/lib/mongoDB';
import { COLLECTION_PROJECTS } from '@/lib/constant';

export async function GET() {
  const res = await (await mongoDB(COLLECTION_PROJECTS))
    .find({ type: 'team' })
    .sort({ started_date: -1 })
    .toArray();

  return NextResponse.json({ status: 200, list: res });
}
