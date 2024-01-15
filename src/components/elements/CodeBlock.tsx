import {ReactNode} from "react";
import Container from "@/components/elements/layout/Container";

export default function CodeBlock({children}: {children: ReactNode}) {
    return (
        <Container>
            <pre className="whitespace-pre-wrap">
                {children}
            </pre>
        </Container>
    )
}
