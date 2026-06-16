
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
function App() {
     const movieNumber = 1;

     if(movieNumber=== 1){}
  return(
   <>
   {movieNumber === 1? (
     <MovieCard movie={{title:"Tims film", release_date:"2024"}}/>
   ):(
   <MovieCard movie={{title:"Johns film", release_date:"2020"}}/>
   )} 

   <Home/>
   </>
  )
}
export default App
