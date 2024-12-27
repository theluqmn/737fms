import kaplay from "kaplay";
const k = kaplay({
    background: [0,0,0]
});

import Intro from "./scenes/notice";
Intro(k);

k.go("intro");
