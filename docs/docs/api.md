# API Integration
This app fetches cryptocurrency price data from CoinGecko.

## API Endpoint Used:
```typescript
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,litecoin,cardano&vs_currencies=usd')
```

### API Handling
- **Data is fetched using Axios**
- **Error handling** is implemented to manage API failures.
- **React Query** caches the data to optimize performance.
