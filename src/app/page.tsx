'use client'
/**
 * Home Component - Chuck Norris Quote Generator
 *
 * This is the main page component of the Chuck Norris quote application.
 * It displays a quote box with a Chuck Norris image and a button to fetch new quotes.
 * The component is responsive and adapts its layout based on screen size.
 */
import { useEffect, useState } from "react";
import { FetchDevQuoteManager } from "@/lib/fetchDevQuoteManager";
import { QuoteBox } from "@/components/QuoteBox";
import chuckNorrisImage from '../../public/chuck-norris.png';
import Image from "next/image";

export default function Home() {
    // Initialize the quote fetching service
    const fetchDevQuoteManager = FetchDevQuoteManager()

    // State to store the current quote and loading status
    const [quote, setQuote] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Fetch a quote when the component mounts
    useEffect(() => {
        const fetch = async () => {
            // Set loading state to true before fetching
            setIsLoading(true)

            // Fetch a quote from the service
            const fetchedQuote = await fetchDevQuoteManager.fetchDevQuote();

            // Update state with the fetched quote
            setQuote(fetchedQuote);

            // Set loading state to false after fetching completes
            setIsLoading(false)
        }

        // Execute the fetch function
        fetch();
    }, []); // Empty dependency array ensures this only runs once on mount

    /**
     * Handler for the "Load New Quote" button click
     * Fetches a new quote and updates the state
     */
    const handleClick = async () => {
        const quote = await fetchDevQuoteManager.fetchDevQuote();
        setQuote(quote);
    };

    return (
        <div>
            {/* Main container with responsive layout */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                {/* Chuck Norris image container */}
                <div className="w-16 h-16 self-center md:self-start md:mt-2">
                    <Image
                        src={chuckNorrisImage}
                        alt={'Chuck Norris Icon'}
                        width={64}
                        height={64}
                    />
                </div>

                {/* Quote content container */}
                <div className="flex flex-col items-center md:items-start">
                    {/* QuoteBox component displays the fetched quote and loading state */}
                    <QuoteBox quote={quote} isLoading={isLoading} />

                    {/* Button to fetch a new quote */}
                    <button
                        onClick={() => handleClick()}
                        className="border border-black text-black px-4 py-2 rounded transition-colors duration-200 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black mt-4"
                    >
                        Load New Quote
                    </button>
                </div>
            </div>
        </div>
    );
}