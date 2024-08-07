import axios from "axios";
import { useEffect, useState } from "react"

const useFetchData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://192.168.100.115:3300/rooms');
                const result = response.data
                setData(result)
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

export default useFetchData;