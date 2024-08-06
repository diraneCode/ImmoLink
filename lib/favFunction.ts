import Toast from 'react-native-toast-message';
import { useState } from "react";

const [favorite, setFavorite] = useState(false);
const showToast = () => {
    Toast.show({
        type: 'success',
        text1: 'Hello 👋',
        text2: 'Chambre ajouter a vos favoris ❤️'
    });
}
export const handleFavorite = (value: boolean) => {
    setFavorite(!value);
    showToast();
}