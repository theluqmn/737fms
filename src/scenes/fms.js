export default function FMS(k) {
    k.scene("fms", () => {
        k.add([
            k.text("proudly made with kaplayjs", {
                font: "arial",
                size: 15,
                width: 500
            }),
            k.pos(300, 20),
            k.color(125,125,125),
            k.anchor("top")
        ]);

        frameComponent(k);
        displayComponent(k);
    });
};

function frameComponent(k) {
    const frame = k.add([
        k.rect(500, 800),
        k.pos(300, 100),
        k.color(20,20,20),
        k.anchor("top")
    ]);

    const plate = k.add([
        k.rect(480, 780),
        k.pos(300, 110),
        k.color(30,30,30),
        k.anchor("top")
    ]);
};

function displayComponent(k) {
    const frame = k.add([
        k.rect(400, 340),
        k.pos(300, 130),
        k.color(25,25,25),
        k.anchor("top")
    ]);

    const screen = k.add([
        k.rect(360, 300),
        k.pos(300, 150),
        k.color(0,0,0),
        k.anchor("top")
    ]);

    // left side
    const l1 = displayButton(k, 80, 215);
    const l2 = displayButton(k, 80, 255);
    const l3 = displayButton(k, 80, 295);
    const l4 = displayButton(k, 80, 335);
    const l5 = displayButton(k, 80, 375);
    const l6 = displayButton(k, 80, 415);

    // right side
    const r1 = displayButton(k, 520, 215);
    const r2 = displayButton(k, 520, 255);
    const r3 = displayButton(k, 520, 295);
    const r4 = displayButton(k, 520, 335);
    const r5 = displayButton(k, 520, 375);
    const r6 = displayButton(k, 520, 415);
}

function displayButton(k, x, y) {
    const button = k.add([
        k.rect(28, 20),
        k.pos(x, y),
        k.color(10,10,10),
        k.anchor("top")
    ]);

    const highlight = k.add([
        k.rect(24, 2),
        k.pos(x, y + 10),
        k.color(255,255,255),
        k.anchor("center")
    ])
}