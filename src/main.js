import kaplay from "kaplay";
const k = kaplay({
    background: [0,0,0]
});

import introScene from "./scenes/intro";
import identScene from "./scenes/ident";
import indexScene from "./scenes";
import perfInitScene from "./scenes/perfInit";
introScene(k);
identScene(k); indexScene(k); perfInitScene(k);

k.go("intro");