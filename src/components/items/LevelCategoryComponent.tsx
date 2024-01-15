import Container from "@/components/elements/layout/Container";
import {LevelCategory} from "@/api/types/levels/level-category";
import Title from "@/components/page/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {Fragment} from "react";
import Divider from "@/components/elements/layout/Divider";
import {Level} from "@/api/types/levels/level";
import LevelPreview from "@/components/items/LevelPreview";

function LevelCategoryPreview({level}: {level: Level}) {
    return (
        <Fragment>
            <Divider></Divider>
            <LevelPreview level={level}></LevelPreview>
        </Fragment>
    );
}

export default function LevelCategoryComponent({category}: {category: LevelCategory}) {
    return (
        <Container>
            <a href={"/levels/" + category.apiRoute}>
                <Title size={"small"}>
                    {/*@ts-ignore*/}
                    <FontAwesomeIcon icon={category.fontAwesomeIcon} className="mr-1"></FontAwesomeIcon>
                    <span>{category.name}</span>
                    <FontAwesomeIcon icon={faLink} className="text-gentle text-sm ml-1"></FontAwesomeIcon>
                </Title>
            </a>
            <p>{category.description}</p>
            {category.previewLevel ? <LevelCategoryPreview level={category.previewLevel}></LevelCategoryPreview> : <></>}
        </Container>
    )
}
