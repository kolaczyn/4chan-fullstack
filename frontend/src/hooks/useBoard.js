import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import slugToName from '../const/slugToName.json';

export default function useBoard() {
  const [boardSlug, _, threadId] = useLocation().pathname.split('/').filter((str) => str !== '');
  const [boardName, setBoardName] = useState('');

  useEffect(() => {
    setBoardName(slugToName[boardSlug.replaceAll('/', '')]);
  }, [boardSlug, threadId]);

  return { boardSlug, boardName, threadId };
}
