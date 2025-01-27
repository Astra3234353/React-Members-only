import './App.css'
import Header from './components/Header'
import Hero from './components/Main/Hero'
import SeasonEvent from './components/SeasonEvent'

function App() {
  return (
    <>
      <Header />
      <SeasonEvent />
      <main>
        <Hero/>
      </main>
    </>
  )
}

export default App
