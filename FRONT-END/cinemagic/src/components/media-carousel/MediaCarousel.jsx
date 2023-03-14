/*react*/
import React from 'react';
/*bootstrap*/
import {Carousel} from 'react-bootstrap';
/*apiConstants.js*/
import {POSTER_URL} from "../../data/apiConstants";
import {BACKDROP_URL} from "../../data/apiConstants";
/*css*/
import "./media-carousel.css"

function MediaCarousel({data}) {
    return (
        <div>
            <Carousel fade={true} indicators={false} nextLabel={""} prevLabel={""}>
                {data && Array.isArray(data) &&
                    data.map((media) => {
                        return (
                            <Carousel.Item key={media.id}>
                                <img
                                    className={"media-backdrop"}
                                    src={`${BACKDROP_URL}${media.backdrop_path}`}
                                    alt={media.title}
                                />
                                <Carousel.Caption>
                                    <img
                                        src={`${POSTER_URL}${media.poster_path}`}
                                        alt={`${media.title} poster`}
                                    />
                                    <h3 className={"media-title"}>
                                        {media.title ? media.title : media.name}
                                    </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })}
            </Carousel>
        </div>
    );
}

export default MediaCarousel;