import React from "react"

function NewStoreForm({setName, setImage, setSeason, setEpisode, post, name, image, season, episode}) {

    return(
        <form onSubmit={(e)=>post(e)}>
            <input type="text" value={name} id="name" placeholder="Store Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" value={image} id="image" placeholder="Image URL" onChange={(e)=>setImage(e.target.value)} />
            <input type="number" value={season} id="season" placeholder="Season" step="1" onChange={(e)=>setSeason(e.target.value)}/>
            <input type="number" value={episode} id="episode" placeholder="Episode" step="1" onChange={(e)=>setEpisode(e.target.value)}/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;