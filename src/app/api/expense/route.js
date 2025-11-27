
import { NextResponse } from 'next/server';

export async function POST(req) {
  try{
    // Use the new authentication helper

    const body = await req.json();

    console.log("Body====>",JSON.stringify(body));
    
    return NextResponse.json({status: 'success', message: 'expense successfully received'}, { status: 200 });
  }catch(err){
    console.log(err);
    return NextResponse.json({ status: 'error', message: 'Failed to create expense' }, { status: 500 });
  }
}