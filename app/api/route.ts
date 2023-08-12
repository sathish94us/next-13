import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
    const json = {
        message: 'success'
    }
    // Check if revalidateTag or revalidatePath are automatically creating pages or pages creation happens only at request time
    console.log('Api route GET')
    revalidatePath('/blogs/2');
    return NextResponse.json(json);
}