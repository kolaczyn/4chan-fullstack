import React from 'react';
import PropTypes from 'prop-types';
import {
  CardImg, Card, CardText, CardTitle, CardBody,
} from 'reactstrap';

import baseImageUrl from '../../const/baseImageUrl';

export default function ReplyCard({
  ext, board, id, comment, name,
}) {
  const creationDate = new Date().toDateString();
  const imgSrc = ext === '' ? `${baseImageUrl}default.png` : `${baseImageUrl}${board}-${id}.${ext}`;
  const replyTitle = `${name} ${creationDate} No. ${id}`;
  return (
    <Card outline className="mb-2 d-flex flex-row flex-wrap">
      {/* TODO: put the image on top on mobile */}
      <img style={{ width: '18vw' }} src={imgSrc} alt="reply" />
      <CardBody>
        <CardTitle>{replyTitle}</CardTitle>
        <CardText tag="p" className="tag-block">{comment}</CardText>
      </CardBody>
    </Card>
  );
}

ReplyCard.propTypes = {
  comment: PropTypes.string.isRequired,
  name: PropTypes.string,
  ext: PropTypes.string,
  board: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

ReplyCard.defaultProps = {
  ext: '',
  name: 'Anonymous',
};
