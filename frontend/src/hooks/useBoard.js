import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import slugToName from '../static/const/slugToName';

export default function useBoard() {
  const location = useLocation();
  const [boardSlug, _, threadId] = location.pathname.split('/').filter((str) => str !== '');
  const [boardName, setBoardName] = useState('');

  useEffect(() => {
    setBoardName(slugToName[boardSlug.replaceAll('/', '')]);
  }, [boardSlug]);

  return { boardSlug, boardName, threadId };
}
