/*react*/
import React from 'react';
/*bootstrap*/
import Card from "react-bootstrap/Card";
/*apiConstants.js*/
import {POSTER_URL} from '../../data/apiConstants';
/*css*/
import "./media-card.css"

const MediaCard = ({data}) => {
    return (
        <div>
            <div className={"media-card-container"}>
                {data && Array.isArray(data) &&
                    data.map((media) => {
                        return (
                            <Card
                                key={media.id}
                                bg="transparent"
                                border="dark"
                                text={"light"}
                                style={{width: '14rem'}}
                            >
                                <Card.Img
                                    variant="top"
                                    src={`${POSTER_URL}/${media.poster_path}`}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        {media.title ? media.title : media.name}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        )
                    })}
            </div>
        </div>
    );
};

export default MediaCard;
