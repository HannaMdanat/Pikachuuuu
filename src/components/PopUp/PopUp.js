import React, { useState, useEffect } from 'react'
import './PopUp.css'
import axios from 'axios'

export default function PopUp({ pokemon }) {
    const [pokemons, setPoki] = useState({});
        useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
        .then(response => {
            const data = response.data;
            setPoki(data);
        }).catch();
    }, []);

    function popUpClose() {
        document.getElementById('poki').classList.add('close');
    }

    return (
        <div onClick={() => popUpClose()} id='poki' className='pop-up-wrapper'>
            <div className='content'>
                <div className='modal-header'>
                    <h1 className='modal-title'>{pokemon.name}</h1>
                </div>
                <div className='body horiz'>
                    <img className='img' src={pokemon.sprites['front_default']} />
                    <div className='vertical'>
                        <h2>{`HP : ${100}`}</h2>
                        <h2>{`Weight : ${pokemons.weight}`}</h2>
                        <h2>{`Height : ${pokemons.height}`}</h2>
                        <h2>{`Attack : ${25}`}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}