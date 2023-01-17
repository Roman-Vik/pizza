import React from 'react'

import { Card } from '../../components/Card/Card'

import { NameProduct } from '../../components/NameProduct/NameProduct'
import { Footer } from '../../UI/Footer/Footer'
import { Header } from '../../UI/Header/Header'
import {Section} from "../../components/Section/Section";

export function Pizza () {
  return (
    <>
    <Header></Header>
    <div>ПИЦЦА</div>
    <Footer></Footer>
    <Section/>
    <Card></Card>
    </>
  )
}
