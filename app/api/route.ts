import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
    const json = {
        message: 'success'
    }
    console.log('Api route GET')
    revalidatePath('/blogs/2');
    return NextResponse.json(json);
}