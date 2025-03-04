import axios from 'axios';

export const fetchCryptoPrices = async (): Promise<{ [key: string]: { usd: number } }> => {
  try {
    const res = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,litecoin,cardano&vs_currencies=usd'
    );
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch crypto prices');
  }
};
