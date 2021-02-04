import React from 'react';
import PropTypes from 'prop-types';
import {
  CardImg, Card, CardText, CardTitle, CardBody,
} from 'reactstrap';

import baseImageUrl from '../../const/baseImageUrl';

export default function ReplyCard({
  ext, _id, name, children,
}) {
  const creationDate = new Date().toDateString();
  const imgSrc = ext === '' ? `${baseImageUrl}default.png` : '';
  const replyTitle = `${name} ${creationDate} No. ${_id}`;
  return (
    <Card outline className="mb-2 d-flex flex-row flex-wrap">
      {/* TODO: put the image on top on mobile */}
      <img style={{ width: '18vw' }} src={imgSrc} alt="reply" />
      <CardBody>
        <CardTitle>{replyTitle}</CardTitle>
        <CardText tag="p" className="tag-block">{children}</CardText>
      </CardBody>
    </Card>
  );
}

ReplyCard.propTypes = {
  name: PropTypes.string,
  ext: PropTypes.string,
  children: PropTypes.node.isRequired,
  _id: PropTypes.string.isRequired,
};

ReplyCard.defaultProps = {
  ext: '',
  name: 'Anonymous',
};
