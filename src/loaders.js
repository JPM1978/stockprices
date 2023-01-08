export const priceLoader = async ({ params }) => {
    const symbol = params.symbol;
    const apiKey = "2883a6ffb5752f7d1a5e0167d48c19fb"; //this NEED TO BE YOUR KEY!
    return (await fetch(
        `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`
    )).json();
};