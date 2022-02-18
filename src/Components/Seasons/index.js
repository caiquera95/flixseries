import React from 'react'
import './seasons.css'
import deafultImgUrl from "../../assets/no-image.png"

export default function CardSeason({temporada}){
    return(
        <div className='card-temporada'>
            <img 
                src={`https://image.tmdb.org/t/p/w200/${temporada.poster_path}`}
                onError={(e)=>{e.target.onerror = null; e.target.src=deafultImgUrl}} 
                alt="poster temporada"
            />

            <div className='temporada-info'>
                <h2>{temporada.season_number === 0 ? (
                    <>
                    <strong>Especial</strong>
                    </>
                        ): (
                            <>
                            <h5>{temporada.season_number}ª {temporada.name !== 'Season' ? (
                            <><strong>Temporada</strong></>
                            ) : (
                            <></>
                            )}</h5>
                            </>
                        )
                    }
                </h2>

                <p>{temporada.episode_count} Episódios</p>
                <p>{temporada.overview }</p>
            </div>
        </div>
    )
}