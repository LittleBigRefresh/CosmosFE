import api from "@/api/api-client";
import {Statistics} from "@/api/types/statistics";
import CodeBlock from "@/components/elements/CodeBlock";

export default async function Statistics() {
    const statistics: Statistics = await api.getStatistics();
    return (
        <CodeBlock>
            {JSON.stringify(statistics)}
        </CodeBlock>
    )
}
