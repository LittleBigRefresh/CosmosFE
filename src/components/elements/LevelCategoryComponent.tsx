import Container from "@/components/elements/layout/Container";
import {LevelCategory} from "@/api/types/levels/level-category";
import Title from "@/components/page/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";

export default function LevelCategoryComponent({category}: {category: LevelCategory}) {
    return (
        <Container>
            <a href={"/levels/" + category.apiRoute}>
                <Title size={"small"}>
                    {/*@ts-ignore*/}
                    <FontAwesomeIcon icon={category.fontAwesomeIcon}></FontAwesomeIcon>
                    <span>{category.name}</span>
                    <FontAwesomeIcon icon={faLink} className="text-gentle text-sm ml-1"></FontAwesomeIcon>
                </Title>
            </a>
            <p>{category.description}</p>
        </Container>
    )
}
