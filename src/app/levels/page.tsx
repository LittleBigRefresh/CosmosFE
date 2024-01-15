"use client";

import {Fragment} from "react";
import Title from "@/components/page/Title";
import api from "@/api/api-client";
import {LevelCategory} from "@/api/types/levels/level-category";
import LevelCategoryComponent from "@/components/elements/LevelCategoryComponent";
import ResponsiveGrid from "@/components/elements/layout/ResponsiveGrid";

function CategoryList({categories}: {categories: LevelCategory[] | null}) {
    if(!categories) return (<p>Loading...</p>);

    return categories.map(c => <LevelCategoryComponent category={c} key={c.apiRoute}></LevelCategoryComponent>);
}

export default function LevelCategories() {
    const categories: LevelCategory[] | null = api.getLevelCategories();

    return (
        <Fragment>
            <Title>Level Categories</Title>
            <p>Discover and browse through new levels using categories!</p>
            <br/>
            <ResponsiveGrid>
                <CategoryList categories={categories}></CategoryList>
            </ResponsiveGrid>
        </Fragment>
    )
}
