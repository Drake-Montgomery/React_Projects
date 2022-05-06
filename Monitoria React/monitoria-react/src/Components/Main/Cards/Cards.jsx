import '../../Header/Header.css';
import React from 'react';

export default (props) => {
    return (
        <div className="card">
            <img src={props.foto} alt="" />
        </div>
    );
}