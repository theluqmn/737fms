export function alphabeticalKeys(k, x, y, textInput, onClick) {
    let size = 22;
    let adjust = 10;

    const button = k.add([
        k.rect(38, 38, {
            radius: 3
        }),
        k.pos(x, y),
        k.color(10,10,10),
        k.anchor("top"),
        k.area(),
        k.pos(x, y),
        k.scale(1),
        k.anchor("top")
    ]);

    switch (textInput) {
        case "CLR":
            size = 15;
            adjust = 12;
            break;
        case "DEL":
            size = 15;
            adjust = 12;
            break;
        case "SP":
            size = 15;
            adjust = 12;
            break;
    }

    const text = k.add([
        k.text(textInput, {
            font: "arial",
            size: size,
            width: 56,
            align: "center"
        }),
        k.pos(x, y + adjust),
        k.color(255,255,255),
        k.anchor("top"),
        k.scale(1)
    ]);

    button.onClick(() => {
        button.scaleTo(0.95);
        text.scaleTo(0.95);
        setTimeout(() => {
            button.scaleTo(1);
            text.scaleTo(1);
            if (onClick) onClick(); // Run the callback function if it's provided
        }, 100);
    });
}

export function numericalKeys(k, x, y, textInput, onClick) {
    let size = 24;
    let adjust = 8;

    if (textInput.length > 1) {
        size = 14;
        adjust = 12;
    }

    const button = k.add([
        k.circle(18),
        k.pos(x, y),
        k.color(10,10,10),
        k.anchor("top"),
        k.area(),
        k.pos(x, y),
        k.scale(1),
        k.anchor("top")
    ]);

    const text = k.add([
        k.text(textInput, {
            font: "arial",
            size: size,
            width: 56,
            align: "center"
        }),
        k.pos(x, y + adjust),
        k.color(255,255,255),
        k.anchor("top"),
        k.scale(1)
    ]);

    button.onClick(() => {
        button.scaleTo(0.95);
        text.scaleTo(0.95);
        setTimeout(() => {
            button.scaleTo(1);
            text.scaleTo(1);
            if (onClick) onClick(); // Run the callback function if it's provided
        }, 100);
    });
}

function modeKeys(k, x, y, lines, textInput, onClick) {
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
        setTimeout(() => {
            button.scaleTo(1);
            text.scaleTo(1);
            if (onClick) onClick(); // Run the callback function if it's provided
        }, 100);
    });
}

export function lineSelectKey(k, side, x, y, onClick) {
    const button = k.add([
        k.rect(28, 20),
        k.pos(x, y),
        k.color(10,10,10),
        k.anchor("top"),
        k.area(),
        k.scale(1),
        "button"
    ]);

    const highlight = k.add([
        k.rect(22, 2),
        k.pos(x, y + 10),
        k.color(225,225,225),
        k.anchor("center"),
        k.scale(1),
    ]);

    if (side === "left") {
        const line = k.add([
            k.rect(18, 2),
            k.pos(x + 30, y + 10),
            k.color(125,125,125),
            k.anchor("center")
        ]);
    } else if (side === "right") {
        const line = k.add([
            k.rect(18, 2),
            k.pos(x - 30, y + 10),
            k.color(125,125,125),
            k.anchor("center")
        ]);
    }

    button.onClick(() => {
        button.scaleTo(0.95);
        highlight.scaleTo(0.95);
        setTimeout(() => {
            button.scaleTo(1);
            highlight.scaleTo(1);
            if (onClick) onClick(); // Run the callback function if it's provided
        }, 100);
    });

    return button;
}