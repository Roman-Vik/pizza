import React from 'react'
import { NotFoundBlock } from '../../components/NotFoundBlock/NotFoundBlock'
import { Footer } from '../../UI/Footer/Footer'
import { Header } from '../../UI/Header/Header'

export function NotFound (){
  return (
    <>
    <Header></Header>
    <NotFoundBlock></NotFoundBlock>
    <Footer></Footer>
    </>
  )
}
