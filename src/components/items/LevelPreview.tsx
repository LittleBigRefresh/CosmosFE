import {Level} from "@/api/types/levels/level";
import React, {Fragment} from "react";
import Title from "@/components/page/Title";
import LevelStatistics from "@/components/items/LevelStatistics";

export default function LevelPreview({level}: {level: Level}) {
    return (
        <Fragment>
            <Title size="small">{level.title}</Title>
            <LevelStatistics level={level}></LevelStatistics>
            <p>{level.description}</p>
        </Fragment>
    );
}
