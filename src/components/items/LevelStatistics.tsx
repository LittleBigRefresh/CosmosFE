import {Level} from "@/api/types/levels/level";
import Tooltip from "@/components/elements/Tooltip";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faHeart, faStar, faThumbsDown, faThumbsUp} from "@fortawesome/free-solid-svg-icons";

function Statistic({value, name, icon}: {value: number, name: string, icon: IconProp}) {
    return (
        <Tooltip text={name}>
            <FontAwesomeIcon icon={icon} className="mr-0.5"></FontAwesomeIcon>
            {value.toLocaleString(undefined, {
                maximumFractionDigits: 1
            })}
        </Tooltip>
    )
}

export default function LevelStatistics({level}: {level: Level}) {
    return (
        <div className="flex gap-2">
            <Statistic value={level.yayRatings} name="Yays" icon={faThumbsUp}></Statistic>
            <Statistic value={level.booRatings} name="Boos" icon={faThumbsDown}></Statistic>
            <Statistic value={level.hearts} name="Hearts" icon={faHeart}></Statistic>
            <Statistic value={level.score} name="Cool Rating (CR)" icon={faStar}></Statistic>
        </div>
    )
}
