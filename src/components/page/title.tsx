import {ReactNode} from "react";

export type Size = "small" | "medium" | "large";

export default function Title({size = "large", title, children}: {size?: Size, title?: string, children: ReactNode}) {
    switch(size) {
        case "small":
            return (<h3 className="font-bold text-xl" title={title}>{children}</h3>);
        case "medium":
            return (<h2 className="font-bold text-2xl" title={title}>{children}</h2>);
        case "large":
            return (<h1 className="font-bold text-3xl" title={title}>{children}</h1>);
    }
}
