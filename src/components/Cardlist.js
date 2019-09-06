import React from 'react';
import Card from './Card';
import './Cardlist.css';
    


const Cardlist = ({robots})=>{
    return(
    <div class="card-list">
        {
            robots.map((robot)=>{
                return (<Card 
                    id={robot.id} 
                    name={robot.name}
                    email={robot.email} 
                    key={robot.id}
                    />
                ); 
            })
        }
    </div>
    );

}

export default Cardlist;