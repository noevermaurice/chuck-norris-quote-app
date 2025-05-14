type IQuoteBoxProps = {
    quote: string;
    isLoading?: boolean;
};
const QuoteBox = ({ quote, isLoading = false }: IQuoteBoxProps) => {
    return (
        <div
            className={`p-4 mb-4 border-2 ${isLoading
                ? 'animate-pulse bg-gray-200 border-transparent'
                : 'border-black'}`}
        >
            <p className={isLoading ? 'opacity-0' : ''}>{quote}</p>
        </div>
    );
};
export { QuoteBox };