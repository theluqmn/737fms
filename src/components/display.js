export function displayComponent(k) {
    const frame = k.add([
        k.rect(400, 340, {
            radius: 20
        }),
        k.pos(300, 130),
        k.color(25,25,25),
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
    const l1 = displayButton(k, 80, 200, () => {
        console.log("left 1");
    });
    const ml1 = displayButtonLine(k, 110, 200);
    const d1 = displayTextPrimary(k, 125, 160, "PERF", "right");

    const l2 = displayButton(k, 80, 240);
    const ml2 = displayButtonLine(k, 110, 240);

    const l3 = displayButton(k, 80, 280);
    const ml3 = displayButtonLine(k, 110, 280);

    const l4 = displayButton(k, 80, 320);
    const ml4 = displayButtonLine(k, 110, 320);

    const l5 = displayButton(k, 80, 360);
    const ml5 = displayButtonLine(k, 110, 360);

    const l6 = displayButton(k, 80, 400);
    const ml6 = displayButtonLine(k, 110, 400);

    // right side
    const r1 = displayButton(k, 520, 210);
    const mr1 = displayButtonLine(k, 490, 210);

    const r2 = displayButton(k, 520, 250);
    const mr2 = displayButtonLine(k, 490, 250);

    const r3 = displayButton(k, 520, 290);
    const mr3 = displayButtonLine(k, 490, 290);

    const r4 = displayButton(k, 520, 330);
    const mr4 = displayButtonLine(k, 490, 330);

    const r5 = displayButton(k, 520, 370);
    const mr5 = displayButtonLine(k, 490, 370);
    
    const r6 = displayButton(k, 520, 410);
    const mr6 = displayButtonLine(k, 490, 410);
}

function displayButton(k, x, y, onClick) {
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

function displayButtonLine(k, x, y) {
    const line = k.add([
        k.rect(18, 2),
        k.pos(x, y + 10),
        k.color(125,125,125),
        k.anchor("center")
    ]);
}

function displayTextPrimary(k, x, y, text, align = "left") {
    const textComponent = k.add([
        k.text(text, {
            font: "consolas",
            size: 20,
            width: 170,
            align: align
        }),
        k.pos(x, y),
        k.color(255,255,255),
        k.anchor("topleft")
    ]);

    return textComponent;
}

function displayTextSecondary(k, x, y, text, align = "left") {
    const textComponent = k.add([
        k.text(text, {
            font: "consolas",
            size: 18,
            width: 170,
            align: align
        }),
        k.pos(x, y),
        k.color(255,255,255),
        k.anchor("topleft")
    ]);

    return textComponent;
}