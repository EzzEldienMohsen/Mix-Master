import React from 'react'
import Wrapper from '../assets/wrappers/CocktailList'
import CockTailCard from './CockTailCard'
const CockTailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>the search term has no match...</h4>
    )
  }
  var formattedDrinks = drinks.map((item) => {
    var { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
    return {
      id: idDrink,
      name: strDrink,
      img: strDrinkThumb,
      type: strAlcoholic,
      glass: strGlass,
    }
  })
  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CockTailCard key={item.id} {...item} />
      })}
    </Wrapper>
  )
}

export default CockTailList
