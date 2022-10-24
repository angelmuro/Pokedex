import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import Header from './shared/Header'
import "./styles/pokedesById.css"

const PokedexById = () => {

  const {id} = useParams()

  const [pokemon, setPokemon] = useState()

  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
         console.log(err)
         setHasError(true)
         })
  }, [])
  
  if(hasError){
    return <Pokemon404 />
  }

  return (
    <div >
    <Header />
    
    <div className='pokedexid__container'>
     <article className='pokedexid__article'>
      <header className={`pokedexid__header bg-${pokemon?.types[0].type.name}`}>
      <img className='pokedexid__img' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
      </header>
      
      <h1 className={`pokedexid__number letter-${pokemon?.types[0].type.name}`}>#{pokemon?.id} </h1>
      <div className='pokedexid__name-container'>
        <h2 className='pokedexid__line'></h2>
        <h2 className={`pokedexid__name letter-${pokemon?.types[0].type.name}`}> {pokemon?.name}</h2>
        <h2 className='pokedexid__line'></h2>
      </div>
      <section className='pokedexid__body'> 
        <ul className='pokedexid__descrip-container'>
          <li className='pokedexid__weight'> <strong>Weight</strong>  
            <span className='pokedexid__weight-span'> <strong> {pokemon?.weight}</strong></span></li>
          <li className='pokedexid__weight'><strong>Height </strong> 
            <span className='pokedexid__weight-span'> <strong>{pokemon?.height}</strong></span></li>
        </ul>
      </section>
      
      
      <div className='pokedexid__abilities-container'>
      <ul className='pokedexid__type-container'> 
         <h3 className='pokedexid__type-title'>Type</h3>
         <div className='pokedexid__types'>
          {
              pokemon?.types.map(type => (
                <li 
                  className='pokedexid__type'               
                  key={type.type.name}
                  > <span className={`pokedexid__types-span bg-${type.type.name}`}> {type.type.name}</span>
                  </li>              
              ))
          }
         </div> 
      </ul>
      <ul className='pokedexid__ability-container'> 
          <h3 className='pokedexid__ability-title'>Abilities</h3> 
          <div className='pokedexid__abilities'>
           {
              pokemon?.abilities.map(ability => (  
                <li 
                className='pokedexid__ability'
                  key={ability.ability.name}>  
                  {ability.ability.name}
                  </li>                        
              ))
            } 
          </div>       
          </ul>
        </div>
        <div className='pokedexid__stats-title-container'>
           <div className='pokedexid__stats-title'> <h1>Stats</h1></div>
           <h2 className='pokedexid__ball'></h2>
           <div className='pokedexid__stats-ball'>
            <img src="./public/images/pokedexbyid/pokeball.jpg" alt="" />
           </div>
        </div>
      <div className='pokedexid__stats-container'>
          
         <ul className='pokedexid__stats'> 
            {
                pokemon?.stats.map((stat, i)=> (               
                    <li key={i} > 
                      <span className='pokedexid__stat-span'>    
                        <span className='pokedexid__stat-name'>{stat.stat.name} </span>
                        <span className='pokedexid__stats-numbers'>{stat.base_stat}/150 </span>                  
                      </span>    
                        <span className='pokedexid__loading'>
                           <div style={{width : `${stat.base_stat}%`}} ></div>
                        </span>
                      
                    </li>                             
                ))
            }       
         </ul>   
       </div> 
          
      </article> 
      
      </div>
      <div className='pokedexid__move-container'>
        
      <article className='pokedexid__move-article'>
        <div className='pokedexid__stats-title-container'>
           <div className='pokedexid__stats-title'> <h1>Movements</h1></div>
           <h2 className='pokedexid__ball'></h2>
           <div className='pokedexid__stats-ball'>
            <img src="./public/images/pokedexbyid/pokeball.jpg" alt="" />
           </div>
        </div>   
        <ul className='pokedexid__move'>
            {
                pokemon?.moves.map(move => (
                    <li className='pokedexid__moves'
                    key={move.move.name} >
                     {move.move.name}
                    </li>
                ))
            }
          </ul>    
      </article>  
       </div>    
       <br />
       <br />
       <br />
       <br />

    </div>
  )
}

export default PokedexById