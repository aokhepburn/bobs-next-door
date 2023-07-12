import React from "react"
import Store from "./Store"

function StoreList({stores}) {


    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
            </tbody>
            {stores.map((store)=> <Store key={store.id} name={store.name} image={store.image} season={store.season} episode={store.episode}/>)}
        </table>
    );
}

export default StoreList;