import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardImg, CardText, CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import baseImageUrl from '../../static/const/baseImageUrl';

export default function ThreadCard({
  board, ext, subject, comment, _id,
}) {
  const threadUrl = `/${board}/thread/${_id}`;
  const imgSrc = ext === '' ? `${baseImageUrl}default.png` : `${baseImageUrl}${board}-${_id}.${ext}`;
  return (
    <Card outline className="mb-4">
      <Link to={threadUrl}>
        <CardImg top width="100%" src={imgSrc} alt={subject || 'Thread thumbnail'} />
      </Link>
      <CardBody>
        <CardText className="small border-bottom font-italic">R: 100 / I: 16</CardText>
        <CardTitle tag="h3" className="h6 font-weight-bold mt-2 mb-1">{subject}</CardTitle>
        <CardText className="mb-1">{comment}</CardText>
        <Link to={threadUrl}>Read more...</Link>
      </CardBody>
    </Card>
  );
}

ThreadCard.propTypes = {
  board: PropTypes.string.isRequired,
  ext: PropTypes.string,
  subject: PropTypes.string,
  comment: PropTypes.string,
  _id: PropTypes.string.isRequired,
};

ThreadCard.defaultProps = {
  ext: '',
  subject: '',
  comment: '',
};
