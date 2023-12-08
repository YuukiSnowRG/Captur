import React from 'react'
import Portfolio from '@/components/Portfolio'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Captur App Portfolio',
  description: 'Cool Sharks and nature pictures',
}


function work() {
  const heading = 'My work'

  return (
    <div>
      <Portfolio />
    </div>
  )
}

export default work
