import React from 'react'
import SearchForm from './SearchForm'
import Sort from './Sort'

const Feature = () => {
  return (
    <div className='flex gap-5' style={{margin: '30px 0'}}>
        <SearchForm/>
        <Sort/>
    </div>
  )
}

export default Feature