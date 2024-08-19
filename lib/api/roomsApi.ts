import axios from "axios";
import { useEffect, useState } from "react"
import { Troom } from "../definition";

/*** Recuperation de toutes les chmabres  */

const useFetchData = () => {
    const [data, setData] = useState<Troom>();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://172.27.16.1:3000/rooms');
                const result = response.data
                setData(result)
                // console.log(result);
                
            }catch(error){
                setError(true)
            }finally{
                setLoading(false)
            }
        }

        fetchData()
    },[])

    return { data, loading, error}
}

/*** Recuperation d'une chambre  */

const useOneFetchData = (id:number) => {
    const [data, setData] = useState<Troom>();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = axios.get(`http://172.27.16.1:3000/rooms/${id}`);
                const result = (await response).data
                setData(result);
                // console.log(result);
            }catch(error){
                setError(true);
            }finally{
                setLoading(false);
            }
        }

        fetchData();

    }, []);

    return { data, loading, error }
}


/** Ajout d'une chambre */
const addRoom = async (room: Troom) => {
    const response = await axios.post(`http://172.27.16.1:3000/rooms`,
        {
            type: room.type,
            ville: room.ville,
            prix: room.prix,
            nbChambre: room.nbChambre,
            descriptiom: room.description
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    const data = await response.data
}

/** Modification d'une chmabre */
const updateRoom = async (id:number) => {
    try{
        const response = await axios.put(`http://172.27.16.1:3000/rooms/${id}`);
        const data = await response.data;
        console.log(data);
    }catch(error){
        console.error(error)
    }
}

/** Supression d'une chambre */

const deleteRoom = async (id:number) => {
    try{
        const response = await axios.delete(`http://172.27.16.1:3000/rooms/${id}`);
        const data = response.data
        console.log("Chambre supprimer");
    }catch(error){
        console.error(error)
    }
}


export {
    useFetchData,
    useOneFetchData,
    addRoom,
    updateRoom,
    deleteRoom
};

