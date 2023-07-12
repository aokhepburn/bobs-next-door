import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import {useState, useEffect} from 'react'

function App() {
  const [stores, setStores] = useState([])

  const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [season, setSeason] = useState(0)
    const [episode, setEpisode] = useState (0)

  useEffect(()=>{
    fetch('http://localhost:8085/stores')
    .then(res=>res.json())
    .then(stores=>setStores(stores))
  }, [])

  function post(e){
    e.preventDefault()
    fetch('http://localhost:8085/stores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          image: image,
          season: season,
          episode: episode,
        }
        )
    })
    .then(res=>res.json())
    //.then(data=>console.log(data))
    .then(newStore =>{setStores([...stores, newStore])})
    
  }

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search />
      <NewStoreForm
      name={name}
      image={image}
      season={season}
      episode={episode}
      setName={setName}
      setImage={setImage}
      setSeason={setSeason}
      setEpisode={setEpisode}
      post = {post}
      />
      <StoreList stores={stores}/>
    </div>
  );
}

export default App;
