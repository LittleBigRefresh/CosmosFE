import {ReactNode} from "react";

export default function Container({children}: {children: ReactNode}) {
    return (
        <div className="bg-container-background rounded px-5 py-2.5">
            {children}
        </div>
    )
}
