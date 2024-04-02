import connectDB from '@/database/mongodb'
import React from 'react'

const Home = () => {

connectDB()
  return (
    <div>

      <h1 className='text-4xl'>SERVER ACTIONS</h1>
    </div>
  )
}

export default Home