import "./App.css";
import Search from "./components/Search";
import NewStoreForm from "./components/NewStoreForm";
import StoreList from "./components/StoreList";
import { useState, useEffect } from "react";

function App() {
  const [stores, setStores] = useState([]);

  //▼▼▼▼▼ allows text you're entering to be tracked
  const [searchText, setSearchText] = useState("");

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [season, setSeason] = useState(0);
  const [episode, setEpisode] = useState(0);

  //GET request for basic access to JSON data
  useEffect(() => {
    fetch("http://localhost:8085/stores")
      .then((res) => res.json())
      .then((stores) => setStores(stores));
  }, []);

  //POST fetch for adding a new store from the form
  function post(e) {
    e.preventDefault();
    fetch("http://localhost:8085/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        season: season,
        episode: episode,
      }),
    })
      .then((res) => res.json())
      //.then(data=>console.log(data))
      .then((newStore) => {
        setStores([...stores, newStore]);
      });
  }

  //▼▼▼▼▼ updates the searchText state with the input from Search.js and the search-content div
  //must be passed as a prop to the Search component to retrieve the input value
  function updateSearchText(event) {
    setSearchText(event.target.value);
  }

  //▼▼▼▼▼ is the array that returns searched words
  //this has to be passed to StoreList instead of just Stores so the table changes
  const filteredStores = stores.filter((store) =>
    //has to be an if else statement of what matches the searchText
    //why do I need a if else
    //stores.filter((store)=>{return store.name.toLowerCase().includes(searchText.toLowerCase())
    {if(searchText === ''){
      return true
      //▲▲▲▲ why do we set it as true? how does that keep it at full stores. why not return 'stores'?
    }else{
      return store.name.toLowerCase().includes(searchText.toLowerCase())
      //▲▲▲▲Have to use .toLowerCase, human error is real, I was ready to spiral over why the search results were not accurate
    }
  }
  );

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search updateSearchText={updateSearchText} />
      {/* ▼▼▼▼ seriously can I not write my states in NewStoreForm and NOT pass 9 props*/}
      <NewStoreForm
        name={name}
        image={image}
        season={season}
        episode={episode}
        setName={setName}
        setImage={setImage}
        setSeason={setSeason}
        setEpisode={setEpisode}
        post={post}
      />
      <StoreList stores={filteredStores} />
    </div>
  );
}

export default App;
