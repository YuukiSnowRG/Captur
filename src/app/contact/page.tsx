import React from 'react'
import ContactComponent from '@/components/ContactComponent'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Captur App Contact Me',
  description: 'Cool Sharks and nature pictures',
}

function contact() {
  return (
    <div>
      <ContactComponent />
    </div>
  )
}

export default contact
