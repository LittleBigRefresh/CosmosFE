import {Level} from "@/api/types/levels/level";
import {ReactNode} from "react";

export default function Tooltip({text, children}: {text?: string, children: ReactNode}) {
    // TODO: implement properly
    return (
        <div title={text}>
            {children}
        </div>
    )
}
