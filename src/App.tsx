import React, { useEffect } from 'react'
import logo from './assets/logo.svg'

const App = () => {
  useEffect(() => {
    console.log('app created')
  })
  return (
    <div className='flex justify-center items-center h-screen bg-gray-700'>
      <img src={logo} className='w-40 h-40' alt='logo' />
    </div>
  )
}

export default App
