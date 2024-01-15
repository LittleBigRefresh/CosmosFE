import {ReactNode} from "react";

export default function ResponsiveGrid({children}: {children: ReactNode}) {
    return (
        <div className="grid gap-2.5 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {children}
        </div>
    )
}
