import React, {useState, useEffect} from 'react'
import api from '../../services/api'
import './search.css'

import Card from '../../Components/Cards'
import Nav from '../../Components/Nav'


export default function Search(props){
  const [serie, setSerie] = useState([])
  const urlAPI = 'search/tv' + 
  props.location.search + 
  '&api_key=fac3f4b4bcfdf82aee63697a14557046&language=pt_BR';

  useEffect(
    function(){
      load()
    }, [props.location.search]
  )

  async function load(){
    try {
      const response = await api.get(urlAPI);
      console.log(response.data.results)
      setSerie(response.data.results)
      console.log(props.location)
  }
    catch (erro) {
      console.log(erro)
  }
}

return (
    <div className="App">
   <Nav/>
      <div className='boxContainer'>
        {serie.length === 0 ? (
            <div className="container-vazio">
              <h2>Não foi encontrada nenhuma série.</h2>
          </div>
        ): (
          <div className="grid-container">
          {serie.map((series) => {
            return <Card key={series.id} series={series} />
          })}
        </div>

        )}
           
      </div>
    </div>
  );
}