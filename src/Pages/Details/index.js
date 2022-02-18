import React, {useState, useEffect} from 'react'
import api from '../../services/api'
import './detail.css'

import {AiFillStar} from 'react-icons/ai'
import {MdClose} from 'react-icons/md'

import CardSeason from '../../Components/Seasons'

export default function Detail(props){
  const [serie, setSerie ] = useState([])
  const [genres, setGenres] = useState([])
  const [temporadas, setTemporadas] = useState([])
  const { serieId } = props.match.params;

  const imgBaseUrl = "https://image.tmdb.org/t/p/w200";
  const imgBgBaseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(
    function(){
      load()
    }, []
  )

  async function load(){
    try {
      const response = await api.get(`/tv/${serieId}?api_key=fac3f4b4bcfdf82aee63697a14557046`)
      console.log(response.data);
      setSerie(response.data);
      setGenres(response.data.genres);
      setTemporadas(response.data.seasons);
  }
    catch (erro) {
      console.log(erro)
  }
}

return (
  <div className='hero'>
      <div
          className="bg"
          style={{
            backgroundImage: `url(${imgBgBaseUrl}${serie.backdrop_path})`,
          }}
        >
        
      </div>
      <button className='btn-back' onClick={props.history.goBack}><MdClose /></button>
      <div className='boxContainerDetail'>
      <img src={`${imgBaseUrl}${serie.poster_path}`} />
        <div className='detailCenter'>
          <div className='titleSerie'>
            <strong>{serie.name}</strong>
            <span className='vote'><AiFillStar />{serie.vote_average}</span>
          </div>
            
            <p className='genres'>
              {genres.map(genero => {return genero.name + ' |'})}
            </p>
            <span>{serie.overview}</span>
        </div>
        
      </div>
      <div className='boxTemporadas'>
            <section className='temporadas'>
                <h2>Temporadas</h2>
                {temporadas.map( (temporada) => <CardSeason key={temporada.id} temporada={temporada} />)}
            </section>
        </div>
      
  </div>

  );
}