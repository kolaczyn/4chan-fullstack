import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardImg, CardText, CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default function ThreadCard({
  board, file, subject, comment, id,
}) {
  const threadUrl = `/${board}/thread/${id}`;
  return (
    <div>
      <Card outline className="mb-4">
        <CardImg top width="100%" src={`img/threads/${file}`} alt={subject || 'Thread thumbnail'} />
        <CardBody>
          <CardTitle tag="h6">{subject}</CardTitle>
          <CardText>{comment}</CardText>
          <Link className="stretched-link" to={threadUrl}>Read more...</Link>
        </CardBody>
      </Card>
    </div>
  );
}

ThreadCard.propTypes = {
  board: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  subject: PropTypes.string,
  comment: PropTypes.string,
  id: PropTypes.number.isRequired,
};

ThreadCard.defaultProps = {
  subject: '',
  comment: '',
};
