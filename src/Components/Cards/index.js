import React, { useEffect} from 'react'
import { useHistory } from "react-router-dom";
import api from '../../services/api'
import {AiFillStar} from 'react-icons/ai'
import {HiPlus} from 'react-icons/hi'

import {toast } from 'react-hot-toast';

import { NavLink } from 'react-router-dom'
import moment from 'moment';

import './card.css'

import defaultImgUrl from "../../assets/no-image.png"

export default function Card({series}){

    
    const imgUrl = 'https://image.tmdb.org/t/p/w200/'
    const dataTv = new Date(series.first_air_date);
    let history = useHistory();

    moment.locale("pt-BR");
    useEffect(
      function(){
        load()
      }, []
    )

    function saveSerie(){
      const myList = localStorage.getItem('seriesList')
      let seriesSave = JSON.parse(myList)  || [];

      const hasSerie = seriesSave.some((serieSave) => serieSave.id === series.id)

      if(hasSerie){
        toast.error("Já foi Salvo")
        return;
      }

      seriesSave.push(series)
      localStorage.setItem('seriesList', JSON.stringify(seriesSave))
      history.push("/mylist");

      toast('Série Adicionada' , {
        icon: '❤️',
      });
    }
  
    async function load(){
  
      try {
        const response = await api.get('/tv/airing_today?api_key=fac3f4b4bcfdf82aee63697a14557046');
        console.log(response.data.results)
    }
      catch (erro) {
        console.log(erro)
    }
  }
    return(
        <div className='box'>
        <div className='containerCard'>
          <div className='card'> 
            <div className='card-center'>
              <div className='img'>
                <NavLink to={`/detail/${series.id}`} className="nav-Detail ">
                   {series.poster_path === null ? 
                   <><img className='defaultImg' src={defaultImgUrl}/></> 
                   : 
                   <><img src={`${imgUrl}${series.poster_path}`} /></>
                   }
                </NavLink>
                </div>

                <strong>{series.original_title}</strong>
                <strong>{series.name}</strong>
                
                    <div className='card-center'>
                      <div className='infos'>
                          <span>{moment(dataTv).format('YYYY')}</span>
                          <span className='vote'><AiFillStar />{series.vote_average}</span>
                          <button onClick={saveSerie} className='FavButton' >
                            <HiPlus />
                          </button>
                      </div>
                    </div>
              </div>
          </div>
        </div>
        </div>

    )
}