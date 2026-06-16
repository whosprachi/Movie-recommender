
import './App.css'
import MovieCard from './components/MovieCard'
function App() {
  return(
   <>
   <MovieCard movie={{title:"Tims film", release_date:"2024"}}/>
   <MovieCard movie={{title:"Johns film", release_date:"2020"}}/>

   
   </>
  )
}
export default App
