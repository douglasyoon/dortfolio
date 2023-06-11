import { COLLECTION_CONTACT } from '@/lib/constant';
import mongoDB from '@/lib/mongoDB';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await (await mongoDB(COLLECTION_CONTACT))
    .find()
    .sort({ order: 1 })
    .toArray();

  return NextResponse.json({ status: 200, list: res });
}
