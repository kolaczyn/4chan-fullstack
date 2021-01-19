import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import slugToName from '../const/slugToName';

export default function useBoard() {
  const [boardSlug, _, threadId] = useLocation().pathname.split('/').filter((str) => str !== '');
  const [boardName, setBoardName] = useState('');

  useEffect(() => {
    setBoardName(slugToName[boardSlug.replaceAll('/', '')]);
  }, [boardSlug]);

  return { boardSlug, boardName, threadId };
}
