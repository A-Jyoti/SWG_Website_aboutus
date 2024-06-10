import React from 'react';
import './App.css';

const Card = ({ photo, name, designation, facebook, linkedin}) => (
    <div className="card">
        <div className="image">
            <img src={photo} alt={name} />
        </div>
        <p className='name'>{name}</p>
        <p className="portfolio">{designation}</p>
        <div className="socialMedia">
            <a href={facebook} className="facebook">
               <i className='fa fa-facebook'></i>
            </a>
            <a href={linkedin} className="linkedin">
               <i className='fa fa-linkedin'></i>
            </a>
        </div>
    </div>
);

export default Card;