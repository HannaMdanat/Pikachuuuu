import React, { useState, useEffect } from 'react'
import './PopUp.css'
import axios from 'axios'

export default function PopUp({ pokemon }) {
    const [pokemonsData, setPokemonsData] = useState({});
        useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
        .then(response => {
            const data = response.data;
            setPokemonsData(data);
        }).catch();
    }, []);

    return (
        <div className='pop-up-wrapper '>
            <div className='content'>
                <div className='modal-header'>
                    <h1 className='modal-title'>{pokemon.name}</h1>
                </div>
                <div className='body horiz'>
                    <img className='img' src={pokemon.sprites['front_default']} />
                    <div className='vertical'>
                        <h2>{`HP : ${100}`}</h2>
                        <h2>{`Weight : ${pokemonsData.weight}`}</h2>
                        <h2>{`Height : ${pokemonsData.height}`}</h2>
                        <h2>{`Attack : ${25}`}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}