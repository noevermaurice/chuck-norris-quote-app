/**
 * QuoteBox Component
 *
 * This component renders a quote inside a styled box with loading state support.
 * When in loading state, it displays a pulsing animation to indicate content is being fetched.
 */

/**
 * Interface for QuoteBox props
 * @typedef {Object} IQuoteBoxProps
 * @property {string} quote - The quote text to display
 * @property {boolean} [isLoading=false] - Optional flag to indicate loading state
 */
type IQuoteBoxProps = {
    quote: string;
    isLoading?: boolean;
};

/**
 * QuoteBox Component
 *
 * @param {Object} props - Component props
 * @param {string} props.quote - The quote text to display
 * @param {boolean} [props.isLoading=false] - Whether the component is in loading state
 * @returns {JSX.Element} - Rendered QuoteBox component
 */
const QuoteBox = ({ quote, isLoading = false }: IQuoteBoxProps) => {
    return (
        <div
            className={`p-5 mb-5 border-2 ${
                isLoading
                    ? 'animate-pulse bg-gray-200 border-transparent' // Loading state styling
                    : 'border-black' // Normal state styling
            }`}
        >
            {/*
              Hide the text during loading by setting opacity to 0
              This maintains the layout while showing the loading animation
            */}
            <p className={isLoading ? 'opacity-0' : ''}>{quote}</p>
        </div>
    );
};

// Export the component for use in other parts of the application
export { QuoteBox };