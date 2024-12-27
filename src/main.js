import kaplay from "kaplay";
const k = kaplay({
    background: [0,0,0]
});

import Intro from "./scenes/intro";
import FMS from "./scenes/fms";
Intro(k);
FMS(k);

k.go("fms");