import React from 'react'
import s from "./Layout.module.css"
import { Header } from '../UI/Header/Header'
import { Ul } from '../components/Ul/Ul'
import { Button } from '../components/Button/Button'
import { Footer } from '../UI/Footer/Footer'
import { Container } from '../components/Container/Container'


export function Layout ({data}) {
  return (
    <>
    <Header></Header>
    <Container>
     <div className={s.menu}>
        <Ul data={data}></Ul>
        <Button></Button>
     </div>
     </Container>
     <Footer></Footer>
    </>
  )
}
