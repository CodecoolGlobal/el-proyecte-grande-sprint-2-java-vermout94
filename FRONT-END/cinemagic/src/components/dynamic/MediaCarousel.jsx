import React from 'react';
import {Carousel} from 'react-bootstrap';

function MediaCarousel({title, data}) {
    const posterUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    const backgroundUrl = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";

    return (
        <div>
            <h3 className="text-white">
                {title}
            </h3>

            <Carousel indicators={false} nextLabel={""} prevLabel={""}>
                {data && Array.isArray(data) &&
                    data.map((media) => {
                        return (
                            <Carousel.Item key={media.id}>
                                <img
                                    className={"media-backdrop"}
                                    src={`${backgroundUrl}${media.backdrop_path}`}
                                    alt={media.title}
                                />
                                <Carousel.Caption>
                                    <img
                                        src={`${posterUrl}${media.poster_path}`}
                                        alt={`${media.title} poster`}
                                    />
                                    <h3 className={"media-title"}>
                                        {media.title}
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