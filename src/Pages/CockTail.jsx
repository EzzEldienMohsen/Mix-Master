import React from 'react'
import axios from 'axios'
import { useLoaderData, Link, Navigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailPage'
import { useQuery } from '@tanstack/react-query'
var URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
var searchSingleDrink = (id) => {
  return {
    queryKey: ['id', id],
    queryFn: async () => {
      var data = await axios.get(`${URL}${id}`)
      return data.data
    },
  }
}
export var loader =
  (queryClient) =>
  async ({ params }) => {
    console.log(params)
    var { id } = params
    await queryClient.ensureQueryData(searchSingleDrink(id))
    return { id }
  }
const CockTail = () => {
  var { id } = useLoaderData()
  var { data } = useQuery(searchSingleDrink(id))
  console.log(data)
  if (!data.drinks) return <Navigate to="/" />

  var singleDrink = data.drinks[0]
  var {
    strAlcoholic: type,
    strDrink: name,
    strDrinkThumb: img,
    strGlass: glass,
    strCategory: category,
    strInstructions: instructions,
  } = singleDrink
  var validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key])

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          go home
        </Link>
        <h2>{name}</h2>
      </header>
      <div className="drink">
        <img src={img} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data">type : </span>
            {type}
          </p>
          <p>
            <span className="drink-data">category : </span>
            {category}
          </p>
          <p>
            <span className="drink-data">glass : </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients : </span>
            {validIngredients.map((ing, index) => {
              var comma = index < validIngredients.length - 1 ? ' ,' : ' '
              var ingredient = ing + comma
              return ingredient
            })}
          </p>
          <p>
            <span className="drink-data">instructions : </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default CockTail
