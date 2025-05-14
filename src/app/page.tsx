'use client'
import {useEffect, useState} from "react";
import {FetchDevQuoteManager} from "@/lib/fetchDevQuoteManager";
import {QuoteBox} from "@/components/QuoteBox";
import chuckNorrisImage from '../../public/chuck-norris.png';
import Image from "next/image";

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
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                <div className="w-16 h-16 self-center md:self-start md:mt-2">
                    <Image
                        src={chuckNorrisImage}
                        alt={'Chuck Norris Icon'}
                        width={64}
                        height={64}
                    />
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <QuoteBox quote={quote} isLoading={isLoading} />
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
