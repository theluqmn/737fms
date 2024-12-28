import { lineSelectKey } from "./keys";

export function displayComponent(k) {
    const frame = k.add([
        k.rect(400, 340, {
            radius: 20
        }),
        k.pos(300, 130),
        k.color(15,15,15),
        k.anchor("top")
    ]);

    const screen = k.add([
        k.rect(360, 300, {
            radius: 15
        }),
        k.pos(300, 150),
        k.color(0,0,0),
        k.anchor("top")
    ]);

    // left side
    const buttonLeft1 = lineSelectKey(k, "left", 1);
    const buttonLeft2 = lineSelectKey(k, "left", 2);
    const buttonLeft3 = lineSelectKey(k, "left", 3);
    const buttonLeft4 = lineSelectKey(k, "left", 4);
    const buttonLeft5 = lineSelectKey(k, "left", 5);
    const buttonLeft6 = lineSelectKey(k, "left", 6);
    // right side
    const r1 = lineSelectKey(k, "right", 1);
    const r2 = lineSelectKey(k, "right", 2);
    const r3 = lineSelectKey(k, "right", 3);
    const r4 = lineSelectKey(k, "right", 4);
    const r5 = lineSelectKey(k, "right", 5);
    const r6 = lineSelectKey(k, "right", 6);
}

export function displayText(k, side, type, pos, align, textInput) {
    let size;
    let x;
    let width = 180;

    if (type == "text") {
        size = 20;
    } else if (type == "heading") {
        size = 18;
        pos -= 15;
    } else if (type == "main") {
        size = 20;
        width = 340;
    }

    if (side == "left") {
        x = 130;
    } else if (side == "right") {
        x = 290;
    }

    const text = k.add([
        k.text(textInput, {
            font: "consolas",
            size: size,
            width: width,
            align: align
        }),
        k.pos(x, pos),
        k.color(255,255,255),
    ]);

    if (type == "heading") {
        text.color = k.rgb(200,200,200);
    }

    return text;
};