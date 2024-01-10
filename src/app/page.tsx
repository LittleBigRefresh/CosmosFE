import {Requester} from "@/api/requester";
import {Instance} from "@/api/types/instance";
import {Fragment} from "react";
import Title from "@/components/page/title";
import CodeBlock from "@/components/CodeBlock";

const requester: Requester = new Requester();

export default async function Home() {
    const instance: Instance = await requester.makeJsonRequest<Instance>("GET", "/instance");
    const version: string = `Running on ${instance.softwareName} v${instance.softwareVersion} (${instance.softwareType})`;

    return (
        <Fragment>
            <Title title={version}>Welcome to {instance.instanceName}!</Title>
            <p>{instance.instanceDescription}</p>

            <br/>
            <CodeBlock>
                {JSON.stringify(instance, null, 4)}
            </CodeBlock>
        </Fragment>
    )
}
