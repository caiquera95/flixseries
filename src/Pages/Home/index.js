import React, {useState, useEffect} from 'react'
import api from '../../services/api'
import './style.css'

import Card from '../../Components/Cards'
import Nav from '../../Components/Nav'

export default function Home(){

  const [serie, setSerie] = useState([])

  useEffect(
    function(){
      load()
    }, []
  )

  async function load(){
    try {
      const response = await api.get('/tv/airing_today?api_key=fac3f4b4bcfdf82aee63697a14557046');
      console.log(response.data.results)
      setSerie(response.data.results)
  }
    catch (erro) {
      console.log(erro)
  }

}

return (
    <div className="App">
      <Nav/>
      <div className='boxContainer'>
            <div className="grid-container">
              {serie.map((series) => {
                return <Card key={series.id} series={series} />
              })}
            </div>
      </div>
    </div>
  );
}