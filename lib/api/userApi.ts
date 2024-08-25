import axios from "axios";
import { Tuser } from "../definition";
import { useEffect, useState } from "react";

const createUser = async (user:Tuser) => {
    try{
        const response = await axios.post('http://192.168.43.114:3000/users',{
            nom: user.nom,
            email: user.email,
            telephone: user.telephone,
            password: user.password
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        const data = await response.data
        console.log(data);
    }catch(error){
        console.log('Erreur lors de l\'enregistrement de l\'utilisateur' + error);
    }
}

const loginUser = async (user: Tuser) => {

    try{
        const response = await axios.post(`http://192.168.43.114:3000/login`,
            {
                email: user.email,
                password: user.password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        const data = await response.data
        console.log(data);
        
        return data;
    }catch(error){
        console.log('erreur lors de la connexion : ' + error);
        return error;
    }

}

const singupUser = async (user: Tuser) => {
    try{
        const response = await axios.post(`http://192.168.43.114:3000/singup`,
            {
                nom: user.nom,
                email: user.email,
                telephone: user.telephone,
                password: user.password,
                status: user.status
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }catch(error){
        console.error(error)
    }
}

export {
    createUser,
    loginUser,
    singupUser
};