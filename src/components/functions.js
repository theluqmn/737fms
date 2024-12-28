import { inputRegister, inputTimeout } from "../functions/inputEngine";

export function functionComponent(k) {
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

    functionButton(k, 126, 490, 2, "INIT\nREF");
    functionButton(k, 190, 490, 1, "RTE");
    functionButton(k, 254, 490, 1, "CLB");
    functionButton(k, 318, 490, 1, "CRZ");
    functionButton(k, 382, 490, 1, "DES");

    functionButton(k, 126, 530, 1, "MENU");
    functionButton(k, 190, 530, 1, "LEGS");
    functionButton(k, 254, 530, 2, "DEP\nARR");
    functionButton(k, 318, 530, 1, "HOLD");
    functionButton(k, 382, 530, 1, "PROG");

    const executeIndicator = k.add([
        k.rect(46, 6),
        k.pos(466, 520),
        k.color(2,46,0),
        k.anchor("top")
    ])

    functionButton(k, 466, 530, 1, "EXEC");

    functionButton(k, 126, 570, 2, "N1\nLIMIT");
    functionButton(k, 190, 570, 1, "FIX");

    functionButton(k, 126, 610, 2, "PREV\nPAGE");
    functionButton(k, 190, 610, 2, "NEXT\nPAGE");

}

function functionButton(k, x, y, lines, textInput) {
    const button = k.add([
        k.rect(56, 32, {
            radius: 3
        }),
        k.pos(x, y),
        k.color(10,10,10),
        k.anchor("top"),
        k.area(),
        k.scale(1)
    ]);
    
    if (lines == 1) { y += 5 };
    const text = k.add([
        k.text(textInput, {
            font: "arial",
            size: 11,
            width: 56,
            align: "center"
        }),
        k.pos(x, y + 5),
        k.color(255,255,255),
        k.anchor("top"),
        k.scale(1)
    ]);

    button.onClick(() => {
        button.scaleTo(0.95);
        text.scaleTo(0.95);
        inputRegister("mode", textInput)
        setTimeout(() => {
            button.scaleTo(1);
            text.scaleTo(1);
            inputTimeout("mode", textInput)
        }, 100);
    });
}
