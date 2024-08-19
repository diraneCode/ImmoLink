import { useState } from "react";
import { Tuser } from "../definition";

const [nom, setNom] = useState("");
const [email, setEmail] = useState("");
const [telephone, setTelephone] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState<Tuser>({});

const validateForm = () => {

    let error: Tuser = {};

    if (!nom) error.nom = "Nom requis";
    if (!email) error.email = "Email requis";
    if (!telephone) error.telephone = "Téléphone requis";
    if (!password) error.password = "Mot de passe requis";

    setErrors(error);

    return Object.keys(error).length == 0;
};

const handleSingupForm = () => {
    if(validateForm()){
        console.log("bien")
        setNom("");
        setEmail("");
        setTelephone("");
        setPassword("");
        setErrors({});
    }
}

export {
    handleSingupForm,
    validateForm
} 
