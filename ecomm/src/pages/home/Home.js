import React from 'react'
import HeroCarousel from '../../component/carousel/HeroCarousel'
import SlickCarousel  from '../../component/slickCarousel/SlickCarousel'
import GiftCard from "../../component/giftcard/GiftCard";
function Home() {
  return (
    <>
    <HeroCarousel/>
    <SlickCarousel/>
    <GiftCard/>
    </>
  )
}

export default Home