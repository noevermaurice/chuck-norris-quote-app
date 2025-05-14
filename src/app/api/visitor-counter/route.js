import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
    try {
        const counter = await prisma.visitorCounter.upsert({
            where: { id: 'visitor_counter' },
            update: { count: { increment: 1 } },
            create: { id: 'visitor_counter', count: 1 },
        });

        return NextResponse.json({ count: counter.count });
    } catch (error) {
        console.error('Error updating visitor counter', error);
        return NextResponse.json(
            { error: 'Visitor counter could not be updated' },
            { status: 500 }
        );
    }
}