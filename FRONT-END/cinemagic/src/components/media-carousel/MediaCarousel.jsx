/*react*/
import React, {useState} from 'react';
/*bootstrap*/
import {Carousel} from 'react-bootstrap';
/*apiConstants.js*/
import {BACKDROP_URL, POSTER_URL} from "../../data/apiConstants";
/*css*/
import "./media-carousel.css"
import MediaModal from "../media-modal/MediaModal";
/*service*/
import {handleCloseModal, handleOpenModal} from "../../service";

function MediaCarousel({data}) {
    const [selectedMedia, setSelectedMedia] = useState(null);

    return (
        <div>
            <Carousel fade={true} indicators={false} nextLabel={""} prevLabel={""}>
                {data && Array.isArray(data) &&
                    data.map((media) => {
                        return (
                            <Carousel.Item
                                key={media.id}
                                onClick={() => handleOpenModal(setSelectedMedia, media)}
                            >
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
            {
                selectedMedia &&
                <MediaModal
                    selectedMedia={selectedMedia}
                    onCloseModal={() => handleCloseModal(setSelectedMedia)}
                />
            }
        </div>
    );
}

export default MediaCarousel;