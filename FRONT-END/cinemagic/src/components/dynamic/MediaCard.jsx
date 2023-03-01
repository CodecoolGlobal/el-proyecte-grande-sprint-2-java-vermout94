import React from 'react';
import Card from "react-bootstrap/Card";

const MediaCard = ({title, data}) => {
    const posterUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    return (
        <div>
            <h3 className="text-white">{title}</h3>
            <div className={"movie-card-container"}>
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
                                    src={`${posterUrl}/${media.poster_path}`}
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