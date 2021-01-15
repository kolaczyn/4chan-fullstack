import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, CardBody, CardImg, CardText, CardTitle,
} from 'reactstrap';

export default function PopularThread({
  board, file, subject, comment, id,
}) {
  const threadUrl = `/${board}/thread/${id}`;
  return (
    <Card outline className="mb-3">
      <CardImg top width="100%" src={`img/threads/${file}`} alt={subject || 'Thread thumbnail'} />
      <CardBody>
        <CardTitle tag="h6">{subject}</CardTitle>
        <CardText>{comment}</CardText>
        <Link className="stretched-link" to={threadUrl}>Read more...</Link>
      </CardBody>
    </Card>
  );
}

PopularThread.propTypes = {
  board: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  subject: PropTypes.string,
  comment: PropTypes.string,
  id: PropTypes.number.isRequired,
};

PopularThread.defaultProps = {
  subject: '',
  comment: '',
};
