'use client'
import {useEffect, useState} from "react";
import {FetchDevQuoteManager} from "@/utils/fetchDevQuote";
import {QuoteBox} from "@/components/QuoteBox";

export default function Home() {
    const fetchDevQuoteManager = FetchDevQuoteManager()
    const [quote, setQuote] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true)
            const fetchedQuote = await fetchDevQuoteManager.fetchDevQuote();
            setQuote(fetchedQuote);
            setIsLoading(false)
        }
        fetch();
    }, []);

    const handleClick = async () => {
        const quote = await fetchDevQuoteManager.fetchDevQuote();
        setQuote(quote);
    };
    return (
        <div>
            <QuoteBox quote={quote} isLoading={isLoading} />
            <button
                onClick={() => handleClick()}
                className="border border-black text-black px-4 py-2 rounded transition-colors duration-200 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black"
            >
                Load New Quote
            </button>
        </div>
    );
}
