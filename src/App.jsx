import { useEffect, useState } from 'react'
import { newsDataAsync } from './store/slices/newsSlice'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Card from './components/Card/Card'
import Search from './components/Search/Search'
import Pagination from './components/Pagination/Pagination'
import Loading from './components/Loading/Loading'
import {  useNavigate } from 'react-router-dom';



function App() {

  // pour mettre à jour l'url
  //const { search, page } = useParams();
  const navigate = useNavigate();

  let dispatch = useDispatch()

  const {news, status, nbPages, page, nbHits} = useSelector(state => state.news)

  // initialiser le début des pages à 1 au lieu de 0
  const currentPage = page + 1;
  
  // pour stocker la recherche pour le passer à la Pagination
  const [querySearch, setQuerySearch] = useState('');

  const handleSearch = (newSearch) => (
    setQuerySearch(newSearch),
    navigate(`/${newSearch}/1`)
  )
  //console.log('querySearch', querySearch)
  console.log('currentPage App', currentPage)

  useEffect(() => {
    dispatch(newsDataAsync({ page: 0 }))
  },[dispatch])

  if(status === 'loading') return <Loading/>
  if(status === 'failed') return <>Erreur: {status.error}</>

  //console.log('nbr de page', nbPages)

  return (
    <>
      <Search handleSearch={handleSearch}/>

      <div className='currentPage'>
        <span>Page {currentPage} sur {nbPages}</span>
        <span>Nombre de résultats : {nbHits}</span>
      </div>

      <div className='cards'>
        
        {news && news.map((article) => {
          return (
            <Card 
                key={article.objectID}
                author={article.author} 
                tags={article._tags}            
                title={article.story_title || article.title} 
                url={article.story_url || article.url}/>
          )
        })}

        <Pagination nbPages={nbPages} query={querySearch}/>
      
      </div>
  </>)
}

export default App
