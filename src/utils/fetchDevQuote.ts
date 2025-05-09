function FetchDevQuoteManager() {
    return {
        fetchDevQuote: fetchDevQuote,
    };
}
    const fetchDevQuote = async () => {
        const res = await fetch('https://api.chucknorris.io/jokes/random?category=dev');
        if (!res.ok) {
            throw new Error(`Error to fetch Quote from API : ${res.statusText}`);
        }
        const data: { value: string } = await res.json();
        return data.value;
    }
export { FetchDevQuoteManager };