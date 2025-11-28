import {Plus, Pencil, Trash, Circle} from "lucide-react-native"
import { Status } from "@/@types/status"
type IconProps = Status & {
    name: 'Plus' | 'Pencil' | 'Trash' | 'Circle' | undefined,
    size?: number,
    color?: string
}
export type { IconProps }

export function Icon({name, size, color}: IconProps) {
    return (
        <>
            {name === 'Plus' && <Plus size={size ?? 18} color={color ?? "#FFF"}/>}
            {name === 'Pencil' && <Pencil size={size ?? 18} color={color ?? "#FFF"} />}
            {name === 'Trash' && <Trash size={size ?? 18} color={color ?? "#FFF"} />}
            
        </>
    )
}