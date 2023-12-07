import Slider from '@/components/Slider'
import { SliderData } from '@/data/SliderData'
import Instagram from '@/components/Instagram'

const heading = 'Captur Photography'


export default function Home() {
  return (
      <>
        <Slider slides={SliderData} />
        <Instagram />
      </>
  )
}
