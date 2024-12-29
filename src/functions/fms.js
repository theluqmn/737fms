import { initDisplay } from "../components/display";
import { initModes } from "../components/modes";
import { initAlphabetical } from "../components/alphabetical"
import { initNumerical } from "../components/numerical";
import { displayEngine } from "../functions/displayEngine";

export default function FMS(k) {
    k.add([
        k.text("Boeing 737NG\nFlight Management Computer", {
            font: "consolas",
            size: 30,
        }),
        k.pos(270, 10),
        k.anchor("top")
    ])

    k.add([
        k.text("proudly made using kaplayjs - designed and developed by luqman", {
            font: "consolas",
            size: 18,
            width: 500
        }),
        k.pos(300, 910),
        k.color(125,125,125),
        k.anchor("top")
    ]);

    const frame = k.add([
        k.rect(500, 800, {
            radius: 20
        }),
        k.pos(300, 100),
        k.color(20,20,20),
        k.anchor("top")
    ]);

    const plate = k.add([
        k.rect(480, 780, {
            radius: 15
        }),
        k.pos(300, 110),
        k.color(30,30,30),
        k.anchor("top")
    ]);

    initDisplay(k);
    initModes(k);
    initAlphabetical(k);
    initNumerical(k);
    displayEngine(k);
};