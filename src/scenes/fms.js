import { displayComponent } from "../components/display";
import { displayEngine } from "../functions/displayEngine";
import { frameComponent } from "../components/frame";
import { functionComponent } from "../components/functions";
import Alphabetical from "../components/alphabetical";

export default function FMS(k) {
    k.scene("fms", () => {
        k.add([
            k.text("proudly made using kaplayjs", {
                font: "arial",
                size: 18,
                width: 500
            }),
            k.pos(300, 910),
            k.color(125,125,125),
            k.anchor("top")
        ]);

        frameComponent(k);
        functionComponent(k);
        displayComponent(k);
        displayEngine(k);
        Alphabetical(k);
    });
};