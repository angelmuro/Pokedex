import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import SelectByType from '../components/pokedex/SelectByType'
import Header from './shared/Header'
import "./styles/pokedex.css"
import Pagination from '../components/pokedex/Pagination'
import Footer from '../components/shared/Footer'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState("All Pokemons")

  useEffect(() => {
    if(typeSelected !== "All Pokemons"){
      //si se selecciona un tipo 
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      // si quiero todos los pokemons
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0"
    axios.get(URL)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
    }  
  }, [typeSelected])
  
  const userName = useSelector(state => state.userName)

  // logica de paginacion
const [page, setPage] = useState(1)
const [pokePerPage, setPokePerPage] = useState(8)
const initialPoke = (page - 1) * pokePerPage
const finalPoke = page * pokePerPage

  return (  
    <div className='pokedex__header'>   
        <Header />   
        <br />   
      <header>       
        <p className='pokedex__p'> <span className='pokedex__span'><strong> Welcome {userName} </strong> </span>, here you can find your favorite pokemon</p>
      </header>
      <aside className='pokedex__aside'>
        <InputSearch />
        <SelectByType setTypeSelected={setTypeSelected} setPage={setPage} />
      </aside>
      <main>
        <div className='card-container'>
          {
            pokemons?.slice(initialPoke, finalPoke).map(pokemon => ( 
              <CardPoke
                key={pokemon.url}
                url={pokemon.url}
              />
             ))
          }
        </div>
      </main>   
<br />
      <Pagination 
           page={page}
           pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
           setPage={setPage}
          />     
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
    </div>
  )
}

export default Pokedex