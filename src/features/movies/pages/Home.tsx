import React from 'react';
import Header from '../../../components/Header';
import Movie from '../components/Movie';

const movies = [
  {
    title: 'Moana 2',
    image:
      'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/1/4/3/4/64341-1-esl-CO/185949fd45e1-480x670_poster_cinecolombia_moana2.png',
  },
  {
    title: 'Venom - El ultimo baile',
    image:
      'https://archivos-cms.cinecolombia.com/images/_aliases/poster_carousel/0/7/8/4/64870-1-esl-CO/4c2a2aafa6a8-vnm3-cine-colombia-banner-web-575x805px-ctafecha.jpg',
  },
  {
    title: 'Cars',
    image:
      'https://es.web.img3.acsta.net/r_1920_1080/img/74/26/74269732320f7c1157834c2f54d7cbf8.jpg',
  },
  {
    title: 'Moana 2',
    image:
      'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/1/4/3/4/64341-1-esl-CO/185949fd45e1-480x670_poster_cinecolombia_moana2.png',
  },
  {
    title: 'Venom - El ultimo baile',
    image:
      'https://archivos-cms.cinecolombia.com/images/_aliases/poster_carousel/0/7/8/4/64870-1-esl-CO/4c2a2aafa6a8-vnm3-cine-colombia-banner-web-575x805px-ctafecha.jpg',
  },
  {
    title: 'Cars',
    image:
      'https://es.web.img3.acsta.net/r_1920_1080/img/74/26/74269732320f7c1157834c2f54d7cbf8.jpg',
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-black">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <span className="text-white text-5xl font-bold mb-16">Now Showing</span>
        <div className="flex flex-wrap gap-10 w-3/5 justify-center last:mb-16">
        {movies.map((item, index) => (
            <Movie key={index} movie={item} />
        ))}
        </div>
      </div>
    </div>
  );
}
