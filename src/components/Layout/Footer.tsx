'use client';
/**
 * Footer Component
 *
 * This component displays a footer at the bottom of the application with a visitor counter.
 * It fetches the visitor count from the API when mounted and displays it.
 * The component includes loading state handling while the count is being fetched.
 */
import { useState, useEffect } from 'react';

/**
 * Footer Component
 *
 * @returns {JSX.Element} - Rendered Footer component with visitor counter
 */
const Footer = () => {
    // State to store the visitor count
    const [visitorCount, setVisitorCount] = useState(0);

    // State to track loading status of the visitor count
    const [isLoading, setIsLoading] = useState(true);

    // Fetch and increment the visitor count when the component mounts
    useEffect(() => {
        /**
         * Async function to fetch and increment the visitor counter
         * This calls the API endpoint that both increments and returns the counter value
         */
        const incrementCounter = async () => {
            try {
                // Make API call to the visitor counter endpoint
                const response = await fetch('/api/visitor-counter');

                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Visitor counter could not be loaded');
                }

                // Parse the JSON response
                const data = await response.json();

                // Update the visitor count state with the value from the API
                setVisitorCount(data.count);
            } catch (error) {
                // Log any errors to the console, but don't break the UI
                console.error('Error:', error);
            } finally {
                // Set loading to false regardless of success or failure
                // This ensures the UI doesn't stay in a perpetual loading state
                setIsLoading(false);
            }
        };

        // Call the function to increment the counter when component mounts
        incrementCounter();
    }, []); // Empty dependency array ensures this only runs once on mount

    return (
        <footer className="absolute bottom-0 left-0 w-full h-16 bg-black flex justify-center items-center">
            <h2 className="text-white">
                {/* Display a loading indicator or the actual count based on loading state */}
                Visitor Count: {isLoading ? '...' : visitorCount}
            </h2>
        </footer>
    );
};

// Export the component for use in other parts of the application
export { Footer };