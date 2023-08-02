import { useState, useEffect } from "react";
import fetchAllPlayers from "../API/ajaxHelpers";
import { useNavigate, useParams } from "react-router-dom";


export default function AllPlayers () {
    const [players, setPlayers] = useState([]);

    const navigate = useNavigate();
    const {param} = useParams();
    console.log(param);

    console.log(fetchAllPlayers);
    useEffect(()=>{

        async () => {
           const playerArray = await fetchAllPlayers()
           console.log(playerArray);
           setPlayers(playerArray)
           
        }

        console.log(players);
    },[])
    
    return (
        <div>
        {
            players.map((player)=>{
                return (
                    <div>
                        <h4>{player.name}</h4>
                        ...whatever you want to display
                     <button>
                         onclick={() => navigate(`/players/${player.id}`)}
                     </button>
                    </div>
                )
            })
        }
    </div>
    )
};