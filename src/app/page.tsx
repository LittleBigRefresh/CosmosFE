"use client";

import {Instance} from "@/api/types/instance";
import {Fragment} from "react";
import Title from "@/components/page/Title";
import CodeBlock from "@/components/elements/CodeBlock";
import api from "@/api/api-client";

export default function Home() {
    const instance: Instance | null = api.getInstanceInfo();
    const version: string = `Running on ${instance?.softwareName} v${instance?.softwareVersion} (${instance?.softwareType})`;

    console.log("render");
    return (
        <Fragment>
            <Title title={version}>Welcome to {instance?.instanceName}!</Title>
            <p>{instance?.instanceDescription}</p>

            <Title size="medium">/api/v3/instance</Title>
            <CodeBlock>
                {JSON.stringify(instance, null, 4)}
            </CodeBlock>
        </Fragment>
    )
}
