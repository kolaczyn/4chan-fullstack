import React, { useState } from 'react';
import { Button, Container } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import slugToName from '../const/slugToName.json';
import CreateThreadForm from '../components/CreateThreadForm';
import ThreadsList from '../components/ThreadsList';

export default function Board() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleFormOpen = () => {
    setIsFormOpen((old) => !old);
  };

  const boardSlug = useLocation().pathname;
  const boardName = slugToName[boardSlug.replaceAll('/', '')];
  const siteTitle = `${boardSlug} - ${boardName} - 4chan`;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteTitle}</title>
      </Helmet>
      <Container className="pb-3 border-bottom">
        <h2>{siteTitle}</h2>
        {isFormOpen ? <CreateThreadForm setIsFormOpen={setIsFormOpen} /> : (
          <Button
            color="primary"
            onClick={toggleFormOpen}
          >
            Start a New Thread
          </Button>
        )}
      </Container>
      <ThreadsList />
      {/* <TheToast /> */}
    </>
  );
}
