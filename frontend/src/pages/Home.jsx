import React from 'react';
import { Helmet } from 'react-helmet';

import WhatIs from '../components/home/WhatIs';
import BoardsList from '../components/home/BoardsList';
import PopularThreads from '../components/home/PopularThreads';
import Stats from '../components/home/Stats';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>4chan</title>
      </Helmet>

      <WhatIs />
      <BoardsList />
      <PopularThreads />
      <Stats />
    </>

  );
}
