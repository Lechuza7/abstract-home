import './App.css'
import { CategoriesList } from './components/CategoriesList'
import { SearchBar } from './components/SearchBar'
import { TopBar } from './components/TopBar'

function App() {
  

  return (
    <>
      <TopBar />
      <SearchBar />
      <CategoriesList />
    </>
  )
}

export default App
