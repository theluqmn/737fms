import kaplay from "kaplay";
const k = kaplay({
    background: [0,0,0]
});

import Intro from "./scenes/intro";
Intro(k);

k.go("intro");
