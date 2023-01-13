import React from 'react'
import { Basket } from '../../components/Basket/Basket'
import { FooterCard } from '../../UI_Cards/FooterCard/FooterCard'
import { HeaderCard } from '../../UI_Cards/HeaderCard/HeaderCard'

export function BasketPages  ()  {
  return (
    <>
    <HeaderCard></HeaderCard>
    <Basket></Basket>
    <FooterCard></FooterCard>
    </>
  )
}
