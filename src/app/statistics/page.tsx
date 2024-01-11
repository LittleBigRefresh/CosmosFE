import {ApiClient} from "@/api/api-client";
import {Requester} from "@/api/requester";
import {Statistics} from "@/api/types/statistics";
import CodeBlock from "@/components/elements/CodeBlock";

const api: ApiClient = new ApiClient(new Requester());

export default async function Statistics() {
    const statistics: Statistics = await api.getStatistics();
    return (
        <CodeBlock>
            {JSON.stringify(statistics)}
        </CodeBlock>
    )
}
