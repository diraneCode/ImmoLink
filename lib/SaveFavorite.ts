import AsyncStorage from '@react-native-async-storage/async-storage';

// Pour sauvegarder une valeur
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // Sauvegarde échouée
    console.error(e);
  }
};

// Pour récupérer une valeur
const getData = async (key) => {
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
