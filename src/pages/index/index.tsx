import React, { useEffect } from 'react'
import Logo from '@/components/Logo'
import { showAlert } from '@/utils/util'
import { helloGet } from '@/service/api'
import './index.css'
import Counter from '@/components/Counter'

const Index = () => {
  useEffect(() => {
    console.log('app created')
  })
  const networkTest = () => {
    console.log('network')
    helloGet()
      .then(res => {
        showAlert(res)
      })
      .catch(err => {
        showAlert(err)
      })
  }
  return (
    <div className='flex flex-col items-center h-screen bg-gray-700'>
      <Logo />
      <div className='bg-white w-3/4 p-4 rounded'>
        <Counter />
        <div onClick={networkTest} className='btn bg-blue-500 mt-2'>
          Network Test
        </div>
      </div>
    </div>
  )
}

export default Index
