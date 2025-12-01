
import { NextResponse } from 'next/server';

let auditLogs = [
    {
        "template_name": "DH Expense Reimbursement",
        "type": "Business Travel - Airfare",
        "field_name": "Tax Code",
        "condition": "Equal to",
        "value": "VAT ZERO RATE",
        "uom": "",
        "policy_violation": "",
        "tolerance": "",
        "explanatory_notes": "Tax code must be 'VAT ZERO RATE' for 'Business Travel - Airfare'"
    },
    {
        "template_name": "DH Expense Reimbursement",
        "type": "Business Travel - Airfare",
        "field_name": "Date",
        "condition": "Not Greater than",
        "value": "30 days from submission date",
        "uom": "Days",
        "policy_violation": "",
        "tolerance": "",
        "explanatory_notes": ""
    }
]


export async function GET(req) {
  try {
    return NextResponse.json({
      status: 'success',
      message: 'Audit logs retrieved successfully',
      payload: auditLogs
    }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 'error',
      message: 'Failed to retrieve audit logs',
      payload: []
    }, { status: 500 });
  }
}

export async function POST(req) {
  try{
    // Use the new authentication helper

    const body = await req.json();

    auditLogs.push(body);
    console.log("Body====>",JSON.stringify(body));

    return NextResponse.json({status: 'success', message: 'expense successfully received', payload: auditLogs}, { status: 200 });
  }catch(err){
    console.log(err);
    return NextResponse.json({ status: 'error', message: 'Failed to create expense', payload: auditLogs }, { status: 500 });
  }
}