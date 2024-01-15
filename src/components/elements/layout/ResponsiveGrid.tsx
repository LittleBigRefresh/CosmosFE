import {ReactNode} from "react";

export default function ResponsiveGrid({children}: {children: ReactNode}) {
    return (
        <div className="grid grid-cols-3 gap-2.5">
            {children}
        </div>
    )
}
