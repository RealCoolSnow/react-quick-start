import React, { useEffect } from 'react'
import Logo from '@/components/Logo'

const App = () => {
  useEffect(() => {
    console.log('app created')
  })
  return (
    <div className='flex justify-center items-center h-screen bg-gray-700'>
      <Logo />
    </div>
  )
}

export default App
