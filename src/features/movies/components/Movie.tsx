import React from 'react';

interface MovieProps {
  title: string;
  image: string;
}

export default function Movie({ movie }: { movie: MovieProps }) {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <img className='rounded-3xl w-64 h-85 hover:scale-105 transition-all duration-300 cursor-pointer' src={movie.image} alt={movie.title} />
      <span className='text-white text-xl'>{movie.title}</span>
    </div>
  );
}
