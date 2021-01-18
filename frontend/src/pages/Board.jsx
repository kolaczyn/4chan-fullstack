import React, { useState } from 'react';
import { Button, Container } from 'reactstrap';
import { Helmet } from 'react-helmet';

import useBoard from '../hooks/useBoard';
import SectionWrapper from '../components/common/SectionWrapper';
import CreateThreadForm from '../components/board/CreateThreadForm';
import ThreadsList from '../components/board/ThreadsList';

export default function Board() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleFormOpen = () => {
    setIsFormOpen((old) => !old);
  };

  const { boardSlug, boardName } = useBoard();
  const siteTitle = `/${boardSlug}/ - ${boardName} - 4chan`;

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Container>
        <SectionWrapper title={siteTitle}>
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
