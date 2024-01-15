"use client";

import {Requester} from "@/api/requester";
import {Instance} from "@/api/types/instance";
import {Statistics} from "@/api/types/statistics";
import {useEffect, useState} from "react";
import {LevelCategory} from "@/api/types/levels/level-category";

export class ApiClient {
    constructor(private requester: Requester) {}

    private makeRequest<T>(method: string, endpoint: string, body: any | undefined = undefined): T | null
    {
        const [data, setData] = useState<T | null>(null);

        useEffect(() => {
            this.requester.makeJsonRequest<T>(method, endpoint, body).then(data => {
                setData(data);
            });
        }, []);

        return data;
    }

    public getInstanceInfo(): Instance | null {
        return this.makeRequest("GET", "/instance");
    }

    public getStatistics(): Statistics | null {
        return this.makeRequest("GET", "/statistics");
    }

    public getLevelCategories(): LevelCategory[] | null {
        return this.makeRequest("GET", "/levels?includePreviews=true");
    }
}

const api = new ApiClient(new Requester());
export default api;
