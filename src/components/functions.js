export function functionComponent(k) {
    const frame1 = k.add([
        k.rect(420, 82, {
            radius: 6
        }),
        k.pos(300, 480),
        k.color(25,25,25),
        k.anchor("top")
    ]);

    const frame2 = k.add([
        k.rect(138, 164, {
            radius: 6
        }),
        k.pos(159, 480),
        k.color(25,25,25),
        k.anchor("top")
    ]);

    functionButton(k, 126, 490, "INIT\nREF");
    functionButton(k, 190, 490, "RTE");
    functionButton(k, 254, 490);
    functionButton(k, 318, 490);
    functionButton(k, 382, 490);

    functionButton(k, 126, 526);
    functionButton(k, 190, 526);
    functionButton(k, 254, 526);
    functionButton(k, 318, 526);
    functionButton(k, 382, 526);

    functionButton(k, 126, 562);
    functionButton(k, 190, 562);

    functionButton(k, 126, 598);
    functionButton(k, 190, 598);
}

function functionButton(k, x, y, textInput) {
    const button = k.add([
        k.rect(56, 28, {
            radius: 3
        }),
        k.pos(x, y),
        k.color(10,10,10),
        k.anchor("top"),
    ])

    const text = k.add([
        k.text(textInput, {
            font: "arial",
            size: 10,
            width: 56,
            align: "center"
        }),
        k.pos(x, y + 5),
        k.color(255,255,255),
        k.anchor("top")
    ])
}
