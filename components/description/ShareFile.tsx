import * as Sharing from 'expo-sharing';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system'
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function ShareFile({image}){
    const [imageUri, setImageUri] = useState("");

    useEffect(() => {
        const loadAsset = async () => {
            const asset = Asset.fromModule(image);
            await asset.downloadAsync();
            setImageUri(asset.localUri || null);
        }

        loadAsset()
    }, [])

    const shareImage = async () => {
        try{
            if(imageUri){
                await Sharing.shareAsync(imageUri)
            }else{
                console.log("Image non trouver")
            }
        }catch(error){
            console.error("oops, impossible de partager " + error)
        }
    }
    return(
        <TouchableOpacity className="w-8 h-8 rounded-full bg-white items-center justify-center" onPress={shareImage}>
            <Ionicons name="share" size={16} color='blue' />
        </TouchableOpacity>
    )
}