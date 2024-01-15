"use client";

import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";

export default function FontAwesomeInitializer() {
    library.add(fas);
    return (<></>);
}
