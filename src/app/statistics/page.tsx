"use client";

import api from "@/api/api-client";
import {Statistics} from "@/api/types/statistics";
import CodeBlock from "@/components/elements/CodeBlock";

export default function Statistics() {
    const statistics: Statistics | null = api.getStatistics();
    return (
        <CodeBlock>
            {JSON.stringify(statistics)}
        </CodeBlock>
    )
}
