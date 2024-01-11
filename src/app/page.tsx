import {Requester} from "@/api/requester";
import {Instance} from "@/api/types/instance";
import {Fragment} from "react";
import Title from "@/components/page/Title";
import CodeBlock from "@/components/elements/CodeBlock";
import {ApiClient} from "@/api/api-client";

const api: ApiClient = new ApiClient(new Requester());

export default async function Home() {
    const instance: Instance = await api.getInstanceInfo();
    const version: string = `Running on ${instance.softwareName} v${instance.softwareVersion} (${instance.softwareType})`;

    return (
        <Fragment>
            <Title title={version}>Welcome to {instance.instanceName}!</Title>
            <p>{instance.instanceDescription}</p>

            <Title size="medium">/api/v3/instance</Title>
            <CodeBlock>
                {JSON.stringify(instance, null, 4)}
            </CodeBlock>
        </Fragment>
    )
}
