import React from 'react'
import logo from '@/assets/logo.svg'

export default class Logo extends React.Component {
  render() {
    return <img src={logo} className='w-40 h-40' alt='logo' />
  }
}
