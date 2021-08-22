import './PokeCard.css'
import React, { useState } from 'react'
import PopUp from './PopUp/PopUp';


const PokeCard = ({pokemon}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
      <div onClick={() => setIsPopupOpen(!isPopupOpen)} className="cards" style={{"maxWidth" : "18rem"}} key={pokemon.id}>
        <div className="card-body">  
          <div className="img-container">
            <img className='img' src={pokemon.sprites['front_default']} />
            <img className='img' src={pokemon.sprites['back_default']} />     
          </div>              
          <div className="card-header"><b>{pokemon.name}</b></div>    
        </div>
        {
          isPopupOpen && 
          <PopUp 
            pokemon={pokemon}
          />
        }
      </div>
    )
};

export default PokeCard