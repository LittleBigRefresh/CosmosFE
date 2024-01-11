import {Requester} from "@/api/requester";
import {Instance} from "@/api/types/instance";
import {Statistics} from "@/api/types/statistics";

export class ApiClient {
    constructor(private requester: Requester) {}

    public async getInstanceInfo(): Promise<Instance> {
        return await this.requester.makeJsonRequest("GET", "/instance");
    }

    public async getStatistics(): Promise<Statistics> {
        return await this.requester.makeJsonRequest("GET", "/statistics");
    }
}
