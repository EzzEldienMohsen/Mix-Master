import axios from 'axios'
import React from 'react'
import SearchForm from '../components/SearchForm'
import { useLoaderData } from 'react-router-dom'
import CockTailList from '../components/CockTailList'
import { useQuery } from '@tanstack/react-query'
var cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const searchCockTaliQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      var res = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
      console.log(res.data)

      return res.data.drinks
    },
  }
}
export const loader =
  (queryClient) =>
  async ({ request }) => {
    var url = new URL(request.url)
    var searchTerm = url.searchParams.get('search') || ''
    await queryClient.ensureQueryData(searchCockTaliQuery(searchTerm))
    return { searchTerm }
  }
const Landing = () => {
  var { searchTerm } = useLoaderData()
  var { data: drinks } = useQuery(searchCockTaliQuery(searchTerm))
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CockTailList drinks={drinks} />
    </>
  )
}

export default Landing
