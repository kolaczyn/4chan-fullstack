import React, { useState } from 'react';
import {
  ButtonGroup, Button, Container,
  ButtonDropdown, Dropdown, DropdownMenu,
  DropdownToggle, DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import SectionWrapper from '../common/SectionWrapper';

const goTop = () => {
  window.scrollTo(0, 0);
};

const goBottom = () => {
  window.scrollTo(0, document.body.scrollHeight);
};

export default function ControlButtons({ top, bottom }) {
  const history = useHistory();

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isImgOpen, setIsImgOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const gotoArchive = () => history.push('archive');

  // TODO: this is dumb. just make it an array or something
  const toggleIsSortOpen = () => setIsSortOpen((old) => !old);
  const toggleIsImgOpen = () => setIsImgOpen((old) => !old);
  const toggleIsCommentOpen = () => setIsCommentOpen((old) => !old);

  // the right group has rounded corners where the buttons meet, but left don't
  // TODO fix that

  /* I'll probably need to switch to redux before implementing these buttons' function */
  return (
    <Container>
      <SectionWrapper>
        {/* make it more responsive on smaller viewports */}
        <div className="d-flex justify-content-between">
          <ButtonGroup>
            {/* I don't like that the button is a link. TODO do something about it */}
            <Button outline color="success" onClick={gotoArchive}>Archive</Button>
            {top
              && <Button onClick={goTop} outline color="info">Top</Button>}
            {bottom
              && <Button onClick={goBottom} outline color="info">Bottom</Button>}
            <Button outline color="primary">Refresh</Button>
          </ButtonGroup>
          {bottom
          && (
          <section>
            <ButtonDropdown isOpen={isSortOpen} toggle={toggleIsSortOpen}>
              <DropdownToggle color="success" outline caret>
                Sort By
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Bump Order</DropdownItem>
                <DropdownItem>Last Reply</DropdownItem>
                <DropdownItem>Creation Date</DropdownItem>
                <DropdownItem>Reply Count</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <ButtonDropdown isOpen={isImgOpen} toggle={toggleIsImgOpen}>
              <DropdownToggle color="info" outline caret>
                Image Size
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Large</DropdownItem>
                <DropdownItem>Small</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <ButtonDropdown isOpen={isCommentOpen} toggle={toggleIsCommentOpen}>
              <DropdownToggle color="primary" outline caret>
                Show OP Comment
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>On</DropdownItem>
                <DropdownItem>Off</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </section>
          )}
        </div>
      </SectionWrapper>
    </Container>
  );
}

ControlButtons.propTypes = {
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  // position: PropTypes.string.isRequired,
};

ControlButtons.defaultProps = {
  top: false,
  bottom: false,
};
