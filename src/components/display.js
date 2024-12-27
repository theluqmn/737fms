import { displayButton } from "./buttons";
import { displayContents } from "../functions/displayEngine";

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
    const buttonLeft1 = displayButton(k, "left", 80, 200, () => {
        displayContents.title = "TEST";
    });
    // const textLeftPrimary1 = displayText(k, "left", "primary", 200, "left", "TEST");
    // const textLeftSecondary1 = displayText(k, "left", "secondary", 200, "left", "SECONDARY");

    const buttonLeft2 = displayButton(k, "left", 80, 240, () => {
        displayContents.title = "BOEING 737NG";
    });
    // const textLeftPrimary2 = displayText(k, "left", "primary", 240, "left", "<DISCORD");
    // const textLeftSecondary2 = displayText(k, "left", "secondary", 240, "left", "SOCIAL MEDIA");

    const buttonLeft3 = displayButton(k, "left", 80, 280, () => {
        displayContents.title = "HIGHSEAS";
    });
    // const textLeftPrimary3 = displayText(k, "left", "primary", 280, "left", "<HIGHSEAS");

    const buttonLeft4 = displayButton(k, "left", 80, 320);
    // const textLeftPrimary4 = displayText(k, "left", "primary", 320, "left", "TEXT");

    const buttonLeft5 = displayButton(k, "left", 80, 360);
    // const textLeftPrimary5 = displayText(k, "left", "primary", 360, "left", "TEXT");

    const buttonLeft6 = displayButton(k, "left", 80, 400);
    // const textLeftPrimary6 = displayText(k, "left", "primary", 400, "left", "<INIT");
    // const textLeftSecondary6 = displayText(k, "left", "secondary", 400, "left", "-----------------");

    // right side
    const r1 = displayButton(k, "right", 520, 200);
    // const displayRight1 = displayText(k, "right", "primary", 200, "right", "TEXT");
    const r2 = displayButton(k, "right", 520, 240);
    const r3 = displayButton(k, "right", 520, 280);
    const r4 = displayButton(k, "right", 520, 320);
    const r5 = displayButton(k, "right", 520, 360);
    const r6 = displayButton(k, "right", 520, 400);
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