import { AccordionDemo } from '@/components/accordian/FAQ'
import Commitment from '@/components/commitment/Commitment'
import Features from '@/components/features/Features'
import Hero from '@/components/hero/Hero'
import Intro from '@/components/intro/Intro'
import { InfiniteMovingCardsDemo } from '@/components/movingcards/MovingCards'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Intro />
      <Commitment />
      <AccordionDemo />
      <InfiniteMovingCardsDemo />
    </div>
  )
}

export default Home