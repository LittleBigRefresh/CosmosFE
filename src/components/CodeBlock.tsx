import {ReactNode} from "react";

export default function CodeBlock({children}: {children: ReactNode}) {
    return (
        <pre className="bg-background whitespace-pre-wrap rounded px-5 py-2.5">
            {children}
        </pre>
    )
}
