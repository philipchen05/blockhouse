import axios from 'axios';

export const fetchCryptoPrices = async (setLoading?: (loading: boolean) => void): Promise<{ [key: string]: { usd: number } }> => {
  try {
    if (setLoading) setLoading(true); // Start loading
    const res = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,litecoin,cardano&vs_currencies=usd'
    );
    return res.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  } finally {
    if (setLoading) setLoading(false); // Stop loading after fetch
  }
};
