import getPlayers from "../API"
import { useEffect, useState } from "react";

export default function AllPlayers() {
    useEffect(() => {
        const [allPlayers, setAllPlayers] = useState('');
        console.log(getPlayers)
    }, []);

    return (
        <>
            <h1>All Players</h1>
        </>
    )
}