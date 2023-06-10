import { TEAM_PROJECTS } from './../../../../lib/constant';
import { NextResponse } from 'next/server';
import mongoDB from '@/lib/mongoDB';

export async function GET() {
  const result = await (await mongoDB(TEAM_PROJECTS)).find().toArray();

  return NextResponse.json({ status: 200, list: result });
}
