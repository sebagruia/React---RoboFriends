import React from 'react';
import Card from './Card';
import './Cardlist.css';
    


const Cardlist = ({robots})=>{
      return(
    <div className="card-list">
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