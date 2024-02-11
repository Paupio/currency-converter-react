import axios from "axios";

const URL =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_Ar6v61yqjJmBjrCsBmJn4Ho8OUdP3g40ETElldDR&base_currency=PLN";

export const getCurrenciesDataFromApi = async () => {
    const response = await axios.get(URL);
    if (response.status !== 200) {
        throw new Error();
    }
    return response.data;
};