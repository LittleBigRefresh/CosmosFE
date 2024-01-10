import {Requester} from "@/api/requester";
import {Instance} from "@/api/types/instance";
import {Fragment} from "react";
import PageTitle from "@/components/page/page-title";

const requester: Requester = new Requester();

export default async function Home() {
    const instance: Instance = await requester.makeJsonRequest<Instance>("GET", "/instance");
    const version: string = `Running on ${instance.softwareName} v${instance.softwareVersion} (${instance.softwareType})`;

    return (
        <Fragment>
            <PageTitle title={version}>Welcome to {instance.instanceName}!</PageTitle>
            <p>{instance.instanceDescription}</p>

            <br/>
            <pre className="whitespace-pre-wrap bg-background rounded p-5">
                {JSON.stringify(instance, null, 4)}
            </pre>
        </Fragment>
    )
}
