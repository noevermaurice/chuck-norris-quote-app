/**
 * Visitor Counter API Route
 *
 * This file implements a simple visitor counter API endpoint that increments
 * a counter in the database each time the route is called.
 */

import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

/**
 * GET Request Handler
 *
 * Handles incoming GET requests to this API route. This function:
 * 1. Increments a visitor counter in the database
 * 2. Returns the updated count as JSON
 *
 * @returns {NextResponse} JSON response containing the updated visitor count or error message
 */
export async function GET() {
    try {
        // Use Prisma's upsert operation which combines create and update operations:
        // - If a record with id 'visitor_counter' exists, increment its count by 1
        // - If no record exists, create a new one with id 'visitor_counter' and count of 1
        const counter = await prisma.visitorCounter.upsert({
            where: { id: 'visitor_counter' }, // Identify the record to update
            update: { count: { increment: 1 } }, // Increment existing count by 1
            create: { id: 'visitor_counter', count: 1 }, // Create new record if it doesn't exist
        });

        // Return a successful response with the current count as JSON
        return NextResponse.json({ count: counter.count });
    } catch (error) {
        // Log the error to the server console for debugging
        console.error('Error updating visitor counter', error);

        // Return an error response with status code 500 (Internal Server Error)
        return NextResponse.json(
            { error: 'Visitor counter could not be updated' },
            { status: 500 }
        );
    }
}