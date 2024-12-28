import kaplay from "kaplay";
const k = kaplay({
    background: [0,0,0]
});

import introScene from "./scenes/intro";
import identScene from "./scenes/ident";
import indexScene from "./scenes";
import perfInitScene from "./scenes/perf-init";
import { posInit1Scene} from "./scenes/pos-init";
introScene(k);
identScene(k); indexScene(k); perfInitScene(k); posInit1Scene(k);

k.go("intro");