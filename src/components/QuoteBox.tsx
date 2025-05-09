type IQuoteBoxProps = {
    quote: string;
    isLoading?: boolean;
};
const QuoteBox = ({ quote, isLoading = false }: IQuoteBoxProps) => {
    return (
        <div
            className={`border-black border-2 p-4 mb-4 ${isLoading ? 'animate-pulse bg-gray-200' : ''}`}
        >
            <p className={isLoading ? 'opacity-0' : ''}>{quote}</p>
        </div>
    );
};
export { QuoteBox };