import React, { useState } from 'react';
import { Button, Container } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import slugToName from '../const/slugToName.json';
import SectionWrapper from '../components/common/SectionWrapper';
import CreateThreadForm from '../components/board/CreateThreadForm';
import ThreadsList from '../components/board/ThreadsList';

export default function Board() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleFormOpen = () => {
    setIsFormOpen((old) => !old);
  };

  // i should make custom hooks for getting current board, since
  // i use this logic in two files (Board.jsx and ThreadList.jsx)
  const boardSlug = useLocation().pathname;
  const boardName = slugToName[boardSlug.replaceAll('/', '')];
  const siteTitle = `${boardSlug} - ${boardName} - 4chan`;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteTitle}</title>
      </Helmet>
      <Container>
        <SectionWrapper title={siteTitle}>
          {/* <Container> */}
          {isFormOpen ? <CreateThreadForm setIsFormOpen={setIsFormOpen} /> : (
            <Button
              color="primary"
              onClick={toggleFormOpen}
            >
              Start a New Thread
            </Button>
          )}
        </SectionWrapper>
      </Container>
      <ThreadsList />
      {/* <TheToast /> */}
    </>
  );
}
