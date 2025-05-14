// Import the PrismaClient class from the Prisma ORM package
import { PrismaClient } from '../generated/prisma';

// Declare a variable to hold our Prisma client instance
let prisma;

// Check if the application is running in production environment
if (process.env.NODE_ENV === 'production') {
    // In production: Create a new PrismaClient instance every time
    prisma = new PrismaClient();
} else {
    // In development: Implement a singleton pattern to prevent
    // creating multiple database connections during hot reloading
    if (!global.prisma) {
        // If no global prisma instance exists yet, create one
        global.prisma = new PrismaClient();
    }
    // Use the existing global prisma instance
    prisma = global.prisma;
}

// Export the PrismaClient instance as the default export
// so it can be imported and used throughout the application
export default prisma;