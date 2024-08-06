import AsyncStorage from '@react-native-async-storage/async-storage';
import { roomType } from './definition';

// Pour sauvegarder une valeur
export const storeFavorite = async (value:roomType) => {
  try {
    await AsyncStorage.setItem('favorite', JSON.stringify(value));
    
  } catch (e) {
    // Sauvegarde échouée
    console.error(e);
  }
};

// Pour récupérer une valeur
export const getFavorite = async (key:string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {            
      return value;
    }
  } catch (e) {
    // Récupération échouée
    console.error(e);
  }
  
};
