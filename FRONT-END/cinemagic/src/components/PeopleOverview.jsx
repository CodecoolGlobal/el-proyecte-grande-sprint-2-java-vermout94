/*react*/
import React from 'react';
/*bootstrap*/
import {Figure} from "react-bootstrap";
/*apiConstants.js*/
import {PEOPLE_URL, PEOPLE_IMAGE_URL} from "../data/apiConstants";
/*css*/


export default function PeopleOverview ({data}){
    return (
        <div>
            <div className="media-figure-container">
                {data && Array.isArray(data) &&
                    data.map((people) => {
                        const figureStyle = {
                            position: 'relative',
                            display: 'inline-block',
                            width: '18rem',
                            height: '39rem',
                        };
                        return (
                            <Figure key={people.id} style={figureStyle}>
                                <Figure.Image src={`${PEOPLE_IMAGE_URL}/${people.profile_path}`} alt="Profile"/>
                                <Figure.Caption>
                                    <h4 style={{ textAlign: 'center'}}>
                                        <br></br>
                                        {people.name}
                                    </h4>
                                    <p style={{ padding: '1rem'}}>
                                        <b>Known For:</b>
                                        <br></br>
                                        {people.known_for.map(movie => {
                                            return movie.title ? movie.title : movie.name;
                                        }).join(", ")}
                                    </p>
                                </Figure.Caption>
                            </Figure>
                        );
                    })}
            </div>
        </div>
    );
}
