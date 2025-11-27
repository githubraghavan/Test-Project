
import { NextResponse } from 'next/server';

// Add OPTIONS handler for CORS preflight requests
export async function OPTIONS(req) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(req) {
  try{
    // Use the new authentication helper

    const body = await req.json();

    console.log("Body====>",JSON.stringify(body));

    return NextResponse.json(
      {status: 'success', message: 'expense successfully received'},
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  }catch(err){
    console.log(err);
    return NextResponse.json(
      { status: 'error', message: 'Failed to create expense' },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}