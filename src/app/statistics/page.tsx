"use client";

import api from "@/api/api-client";
import {Statistics} from "@/api/types/statistics";
import CodeBlock from "@/components/elements/CodeBlock";
import Title from "@/components/page/Title";
import {Instance} from "@/api/types/instance";
import {Fragment} from "react";
import {RequestStatistics} from "@/api/types/request-statistics";

export default function Statistics() {
    const stats: Statistics | null = api.getStatistics();
    const instance: Instance | null = api.getInstanceInfo();

    const requestStats: RequestStatistics | null = stats?.requestStatistics ?? null;

    if(!stats || !instance || !requestStats) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <Fragment>
            <Title>Statistics for {instance.instanceName}</Title>
            <Title size="medium">Server Information</Title>
            <p>Server software: {instance.softwareName} ({instance.softwareType})</p>
            <p>Server version: {instance.softwareVersion}</p>

            <Title size="medium">Things</Title>
            <p>Registered users: {stats.totalUsers} ({stats.activeUsers} active)</p>
            <p>Submitted levels: {stats.totalLevels}</p>
            <p>Uploaded photos: {stats.totalPhotos}</p>
            <p>Events occurred: {stats.totalEvents}</p>

            <Title size="medium">Requests ({requestStats.totalRequests} in total)</Title>
            <p>API requests: {requestStats.apiRequests}</p>
            <p>Game API requests: {requestStats.gameRequests}</p>
            <p>Legacy API requests: {requestStats.legacyApiRequests}</p>

            <Title size="medium">Activity</Title>
            <p>People online now: {stats?.currentIngamePlayersCount}</p>
            <p>Active rooms: {stats?.currentRoomCount}</p>
        </Fragment>
    )
}
