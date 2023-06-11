import mongoDB from '@/lib/mongoDB';
import { NextResponse } from 'next/server';
import { PERSONAL_PROJECTS } from './../../../../lib/constant';

export async function GET() {
  const res = await (await mongoDB(PERSONAL_PROJECTS)).find().toArray();

  return NextResponse.json({ status: 200, list: res });
}
