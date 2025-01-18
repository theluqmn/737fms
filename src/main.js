import kaplay from "kaplay";
const k = kaplay({
    background: [0,0,0]
});

import introScene from "./scenes/intro";
import identScene from "./scenes/ident";
import indexScene from "./scenes";
import perfInitScene from "./scenes/perf-init";
import { posInit1Scene, posInit2Scene} from "./scenes/pos-init";
import n1LimitScene from "./scenes/n1-limit";
import { routeScene } from "./scenes/route";

introScene(k);
identScene(k); indexScene(k); perfInitScene(k);
posInit1Scene(k); posInit2Scene(k);
n1LimitScene(k); routeScene(k);

k.go("ident");