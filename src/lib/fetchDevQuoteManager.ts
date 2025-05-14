/**
 * FetchDevQuoteManager Module
 *
 * This module provides functionality to fetch Chuck Norris developer jokes from the Chuck Norris API.
 * It encapsulates the API call logic and error handling in a reusable service.
 */

/**
 * Creates a quote manager that provides methods to fetch Chuck Norris developer jokes
 *
 * @returns {Object} An object containing methods to fetch Chuck Norris quotes
 * @returns {Function} returns.fetchDevQuote - Function to fetch a random developer joke
 */
function FetchDevQuoteManager() {
    return {
        fetchDevQuote: fetchDevQuote,
    };
}

/**
 * Fetches a random Chuck Norris developer joke from the Chuck Norris API
 *
 * This function makes an API call to the Chuck Norris jokes API,
 * specifically requesting a random joke from the 'dev' category.
 * It handles the API response and error cases.
 *
 * @async
 * @returns {Promise<string>} A promise that resolves to a Chuck Norris developer joke
 * @throws {Error} Throws an error if the API request fails
 */
const fetchDevQuote = async () => {
    // Make the API request to the Chuck Norris jokes API
    const res = await fetch('https://api.chucknorris.io/jokes/random?category=dev');

    // Check if the response is successful
    if (!res.ok) {
        throw new Error(`Error to fetch Quote from API : ${res.statusText}`);
    }

    // Parse the JSON response and extract the joke value
    const data: { value: string } = await res.json();

    // Return just the joke text
    return data.value;
}

// Export the quote manager factory function
export { FetchDevQuoteManager };