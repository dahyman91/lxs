import { Inter } from 'next/font/google'
import Header from './components/Header'
import 'tailwindcss/tailwind.css'
import './styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
    </main>
  )
}
