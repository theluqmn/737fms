import { displayComponent } from "../components/display";
import { frameComponent } from "../components/frame";
import { functionComponent } from "../components/functions";

export default function FMS(k) {
    k.scene("fms", () => {
        k.add([
            k.text("proudly made with kaplayjs", {
                font: "arial",
                size: 18,
                width: 500
            }),
            k.pos(300, 5),
            k.color(0,0,0),
            k.anchor("top")
        ]);

        frameComponent(k);
        functionComponent(k);
        displayComponent(k);
    });
};