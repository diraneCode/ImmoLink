import { useEffect, useState } from "react";
import * as Location from 'expo-location'



export const useLocation = () => {
    const [errorMsg, setErrorMsg] = useState("")
    const [longitude, setLongitude] = useState<number>()
    const [latitude, setLatitude] = useState<number>()
    const [location, setLocation] = useState<any>({})
    const getUserLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if(status !== "granted"){
            setErrorMsg("Permission refuser");
            return;
        }
        let { coords } = await Location.getCurrentPositionAsync();
    
        if(coords){
            const { longitude, latitude } = coords;
            // console.log(`La longitude et la latitude sont : ${longitude} ${latitude}`);
            setLatitude(latitude);
            setLongitude(longitude);
    
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });
            let data = await response
            const info = {
                ville : data[0].city,
                pays: data[0].country
            }
            console.log("localisation " + JSON.stringify(data[0]));
            
            setLocation(info)
            // console.log("Votre localisation est : "+ data[0].country);
        }
        
    }

    useEffect(() => {
        getUserLocation()
    }, []);

    return {longitude, latitude, location, errorMsg};
}