import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

export default function PopularThread({ board, file, subject, comment }) {
    return (
        // <div>
        //     <h6>{board}</h6>
        //     {/* <img src={`img/popularThreads/${file}`} alt={subject} /> */}
        //     <p><b>{subject}</b>{comment}</p>
        // </div>
        <Card outline>
            <CardImg top width="100%" src={`img/popularThreads/${file}`} alt={subject} />
            <CardBody>
                <CardTitle tag="h6">{subject}</CardTitle>
                <CardText>{comment}</CardText>
                <a className="stretched-link" href="ddg.gg">Read more...</a>
            </CardBody>
        </Card>
    )
}
