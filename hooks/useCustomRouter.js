import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'




function useCustomRouter() {

const router = useRouter()
const searchParams = useSearchParams()
const query = {}

let search = searchParams.get('search')

if(search) query.search  = search

const pushQuery = ({search}) => {
if(search !== undefined){
    search === '' ? delete query.search : query.search = search
}

const newQuery = new URLSearchParams(query).toString()

// console.log(newQuery, query)
router.push(`?${newQuery}`)
}

  return {pushQuery, query}
}

export default useCustomRouter