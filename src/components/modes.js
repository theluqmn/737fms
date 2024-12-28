import { input, handleInput } from "../functions/inputEngine";
import { modeKeys } from "./keys";

export function initModes(k) {
    const frame1 = k.add([
        k.rect(420, 92, {
            radius: 6
        }),
        k.pos(300, 480),
        k.color(25,25,25),
        k.anchor("top")
    ]);

    const frame2 = k.add([
        k.rect(138, 184, {
            radius: 6
        }),
        k.pos(159, 480),
        k.color(25,25,25),
        k.anchor("top")
    ]);

    modeKeys(k, 126, 490, 2, "INIT\nREF");
    const initRef = handleInput(() => {
        k.go("index")
    })

    modeKeys(k, 190, 490, 1, "RTE");
    modeKeys(k, 254, 490, 1, "CLB");
    modeKeys(k, 318, 490, 1, "CRZ");
    modeKeys(k, 382, 490, 1, "DES");

    modeKeys(k, 126, 530, 1, "MENU");
    modeKeys(k, 190, 530, 1, "LEGS");
    modeKeys(k, 254, 530, 2, "DEP\nARR");
    modeKeys(k, 318, 530, 1, "HOLD");
    modeKeys(k, 382, 530, 1, "PROG");

    k.add([
        k.rect(46, 6),
        k.pos(466, 520),
        k.color(2,46,0),
        k.anchor("top")
    ])

    modeKeys(k, 466, 530, 1, "EXEC");

    modeKeys(k, 126, 570, 2, "N1\nLIMIT");
    modeKeys(k, 190, 570, 1, "FIX");

    modeKeys(k, 126, 610, 2, "PREV\nPAGE");
    modeKeys(k, 190, 610, 2, "NEXT\nPAGE");

    k.onUpdate(() => {
        initRef(input.mode["INIT\nREF"])
    })
}