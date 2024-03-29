import {RefreshApiResponse} from "@/api/refresh-api-response";

export class Requester {
    private apiBaseUrl: string = "https://lbp.littlebigrefresh.com/api/v3";

    private async makeRequest(method: string, endpoint: string, contentType: string, body: BodyInit | undefined = undefined): Promise<Response> {
        if(endpoint[0] !== "/") throw new Error("Endpoint must begin with slash");

        return await fetch(this.apiBaseUrl + endpoint, {
            method,
            headers: {
                "Content-Type": contentType,
            },
            redirect: "follow",
            cache: "default",
            body,
        });
    }

    public async makeJsonRequest<T>(method: string, endpoint: string, body: any | undefined = undefined): Promise<T> {
        const bodyString: string | undefined = body ? JSON.stringify(body) : undefined;
        const response: Response = await this.makeRequest(method, endpoint, "application/json", bodyString);

        const obj: RefreshApiResponse<T> = await response.json();
        if(!obj.success) {
            if(!obj.error) throw new Error("An API Error happened, but the server did not provide an error.")
            throw new Error(`${obj.error.name} API Error (${obj.error.statusCode}): ${obj.error.message}`)
        }

        return obj.data!;
    }
}
