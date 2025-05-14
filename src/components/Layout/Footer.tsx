'use client';
import { useState, useEffect } from 'react';
const Footer = () => {
    const [visitorCount, setVisitorCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const incrementCounter = async () => {
            try {
                const response = await fetch('/api/visitor-counter');
                if (!response.ok) {
                    throw new Error('Visitor counter could not be loaded');
                }
                const data = await response.json();
                setVisitorCount(data.count);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        };
        incrementCounter();
    }, []);

    return (
        <footer className="absolute bottom-0 left-0 w-full h-16 bg-black flex justify-center items-center">
            <h2 className="text-white">
                Visitor Count: {isLoading ? '...' : visitorCount}
            </h2>
        </footer>
    );
};
export { Footer };