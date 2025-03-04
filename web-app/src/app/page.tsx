'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchCryptoPrices } from '@/lib/api';
import { useState } from 'react';

export default function HomePage() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoPrices,
  });
  const [search, setSearch] = useState('');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
      <input
        placeholder='Search...'
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={() => refetch()}>Refresh</button>
      <ul>
        {data &&
          Object.entries(data)
            .filter(([coin]) => coin.includes(search))
            .map(([coin, info]) => (
              <li key={coin}>{coin.toUpperCase()}: ${info.usd}</li>
            ))}
      </ul>
    </div>
  );
}
