import {Requester} from "@/api/requester";

const requester: Requester = new Requester();

export default async function Home() {
    const user = await requester.makeJsonRequest<any>("GET", "/users/name/jvyden420");
    return (
        <main className="">
            <h1>CosmosFE Prototype</h1>
            <pre className="whitespace-pre-line">
                {JSON.stringify(user)}
            </pre>
        </main>
    )
}
