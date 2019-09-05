import React from 'react';


const Card = (props)=>{ //Varianta cu destructurare direct ca parametru in functie
// const Card = (props)=>{ Daca vreau sa folosesc "props" fara destructurarea de mai sus
    // const {id, name, email} = props;  Asta e o varianta pentru destrcturare
    return(
        <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}?200x200`} alt='robots'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>

    );
}

export default Card;