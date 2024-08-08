import axios from "axios";
import { Tuser } from "../definition";

const createUser = async (user:Tuser) => {
    try{
        const response = await axios.post('http://192.168.1.113:3000/',{
            nom: user.nom,
            email: user.email,
            telephone: user.telephone,
            password: user.password
        })
        console.log(response.data);
    }catch(error){
        console.log('Erreur lors de l\'enregistrement de l\'utilisateur');
    }
}

export default createUser;