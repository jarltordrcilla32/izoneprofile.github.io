import React from "react";
import './ProfileCard.css';

function ProfileCard(props) {
    return (
        <div className="profile-card">
            <img src={props.imageUrl} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>{props.bio}</p>
        </div>
    );
}

export default ProfileCard;