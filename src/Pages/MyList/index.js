import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './mylist.css'

import { toast } from 'react-hot-toast';


import {AiFillStar} from 'react-icons/ai'
import {TiDelete} from 'react-icons/ti'

import defaultImgUrl from "../../assets/no-image.png"


export default function MyList(){

    const [seriesList, setSeriesList] = useState([]);
    const imgUrl = 'https://image.tmdb.org/t/p/w200/'
    
    useEffect(() => {
        const myList = localStorage.getItem('seriesList');
        setSeriesList(JSON.parse(myList) || []);
        console.log(seriesList)
    }, []);

    function handleDelete(id){
      let deleteSerie = seriesList.filter((series) => {
        return(series.id !== id)
      })
      setSeriesList(deleteSerie);
      localStorage.setItem('seriesList', JSON.stringify((deleteSerie)))
      toast.success("Excluída")
    }

    return (
  <>
    <div className="AppMylist">
      <div className='boxContainer'>
            {seriesList.length === 0 ? (
              <div className="container-vazio">
                          <h2>Não há Séries favoritadas.</h2>
                      </div>
            ) : (
              <div className='central'>
                <h5>Favoritos</h5>
              <ul>
                {seriesList.map((series) => {
                  return <li key={series.id}>

                    <div className='titles'>
                      {series.poster_path === null ? <><img className="imgMyList" src={defaultImgUrl}/></> : <><img className="imgMyList" src={`${imgUrl}${series.poster_path}`} /></>}
                      <strong>{series.name}</strong>
                    </div>

                    <div className='infos2'>
                      <span className='vote'><AiFillStar />{series.vote_average}</span>
                      <NavLink to={`/detail/${series.id}`+`${series.name}`}>Detalhes</NavLink>
                      <div className='delete'>
                          <button onClick={ () => handleDelete(series.id) }><TiDelete/></button>
                      </div>
                    </div>
                  </li>
                })}
            </ul>
            </div>
            )}
      </div>
    </div>
    </>
  );
}