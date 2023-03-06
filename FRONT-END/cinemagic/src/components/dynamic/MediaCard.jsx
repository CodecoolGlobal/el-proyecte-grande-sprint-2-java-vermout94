/*react*/
import React from 'react';
/*bootstrap*/
import Card from "react-bootstrap/Card";
import { POSTER_URL } from '../../data/api';

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
                                        {media.title}
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