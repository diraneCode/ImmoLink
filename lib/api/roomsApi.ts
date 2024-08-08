import axios from "axios";
import { useEffect, useState } from "react"
import { roomType } from "../definition";

/*** Recuperation de toutes les chmabres  */

const useFetchData = () => {
    const [data, setData] = useState<roomType>();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://192.168.1.113:3000/rooms');
                const result = response.data
                setData(result)
                console.log(result);
                
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
    const [data, setData] = useState<roomType>();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = axios.get(`http://192.168.1.113:3000/rooms/${id}`);
                const result = (await response).data
                setData(result);
                console.log(result);
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

export {
    useFetchData,
    useOneFetchData
};