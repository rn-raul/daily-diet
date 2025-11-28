import { Status } from "@/types/Status";
import {MaterialIcons} from "@react-native-vector-icons/material-icons"


export function StatusIcon({status}: {status: Status}){
    const color = status === Status.IN_DIET ? "#E5F0DB" : "#F4E6E7";
    return (
        <MaterialIcons name="circle" size={14} color={color}/>
    )
}