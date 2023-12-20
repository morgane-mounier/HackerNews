import { useEffect } from 'react'
import { newsDataAsync } from './store/slices/newsSlice'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Card from './components/Card/Card'
import Search from './components/Search/Search'
import Pagination from './components/Pagination/Pagination'
import Loading from './components/Loading/Loading'

function App() {
  let dispatch = useDispatch()


  const {news, status, nbPages} = useSelector(state => state.news)


  useEffect(() => {
    dispatch(newsDataAsync({ page: 0 }))
  },[dispatch])


  if(status === 'loading') return <Loading/>
  if(status === 'failed') return <>Erreur: {status.error}</>


  //console.log('nbr de page', nbPages)

  return (
    <>
      <Search/>
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
      <Pagination nbPages={nbPages} />
        
      </div>
  </>)
}

export default App
