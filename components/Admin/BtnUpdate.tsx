import { updateRoom } from '@/lib/api/roomsApi';
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

type props = {
    id?: number
}

export default function BtnUpdate({id}: props) {
    const [eye, setEye] = useState("eye");
    const handleUpdate = () => {
        updateRoom(id)
        if(eye == 'eye'){
            setEye("eye-off")
            alert('Ce logement ne sera plus visible sur l\'application')
        }else{
            setEye("eye")
            alert('Ce logement est a nouveau visible sur l\'application')
        }
    }
  return (
    <TouchableOpacity className="w-11 h-11 items-center justify-center z-20 bg-blue-500 rounded-xl mr-2" onPress={handleUpdate}>
        <Ionicons name={eye} color='white' size={20} />
    </TouchableOpacity>
  )
}