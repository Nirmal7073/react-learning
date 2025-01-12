import React from 'react'
import Banner from './components/home/Banner'
import Features from './components/home/Features'
import Customer from './components/home/Customer'
import Chat from './components/home/Chat'
import Order from './components/home/Order'
import Client from './components/home/Client'
import Grow from './components/home/Grow'

function Home() {
  return (
    <>
      <Banner/>
      <Features/>
      <Customer/>
      <Chat/>
      <Order/>
      <Client/>
      <Grow/>
    </>
  )
}

export default Home