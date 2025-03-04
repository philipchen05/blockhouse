'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchCryptoPrices } from '@/lib/api';
import { useState } from 'react';
import './globals.css';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const { data, error, refetch } = useQuery({
    queryKey: ['cryptoPrices'],
    queryFn: () => fetchCryptoPrices(setLoading), // Pass setLoading
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }
  if (error) return <p>Error fetching data</p>;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <input
          className="bg-white placeholder-black text-black rounded-lg px-2"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button className="cursor-pointer" onClick={() => refetch()}>
          Refresh
        </button>
      </div>
      <ul className="ml-3 h-26">
        {data &&
          Object.entries(data)
            .filter(([coin]) => coin.substring(0, search.length) == search)
            .map(([coin, info]) => (
              <li key={coin}>{coin.toUpperCase()}: ${info.usd}</li>
            ))}
      </ul>
    </div>
  );
}
