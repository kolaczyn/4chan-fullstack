import React, { useState } from 'react';
import { Button, Container } from 'reactstrap';
import { Helmet } from 'react-helmet';

import useBoard from '../hooks/useBoard';
import SectionWrapper from '../components/common/SectionWrapper';
import ThreadForm from '../components/form/ThreadForm';
import ThreadsList from '../components/board/ThreadsList';
import BoardControls from '../components/board/BoardControls';

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
          {isFormOpen ? <ThreadForm setIsFormOpen={setIsFormOpen} /> : (
            <Button
              color="primary"
              onClick={toggleFormOpen}
            >
              Start a New Thread
            </Button>
          )}
        </SectionWrapper>
      </Container>
      {/* yeah, the naming is kinda confusing */}
      <BoardControls bottom />
      <ThreadsList />
      <BoardControls top />
      {/* <TheToast /> */}
    </>
  );
}
