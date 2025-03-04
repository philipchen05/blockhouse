# State Management with React Query

## Why React Query?
- Caches API data to reduce redundant API calls.
- Handles **loading**, **error states**, and **auto-refetching**.
- Improves performance by avoiding unnecessary re-fetching.

## How It’s Implemented
```tsx
import { useQuery } from '@tanstack/react-query';
import { fetchCryptoPrices } from '@/lib/api';

const { data, error, isLoading } = useQuery({
  queryKey: ['cryptoPrices'],
  queryFn: fetchCryptoPrices,
});
```
