import Image from 'next/image'
import { Hero, Projects, Contact } from '@/components'

export default function Home() {

  return (
    <main className="">
      <Hero />
      <Projects />
      <Contact />
    </main>
  )
}
