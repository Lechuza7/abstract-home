import './App.css'
import { CategoriesList } from './components/CategoriesList'
import { SearchBar } from './components/SearchBar'
import { TopBar } from './components/TopBar'
import { Footer } from './components/Footer'

function App() {
  

  return (
    <>
      <TopBar />
      <SearchBar />
      <CategoriesList />
      <Footer />
    </>
  )
}

export default App
