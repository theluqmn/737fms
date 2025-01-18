export function assistantIndicateLSK(k, side, pos) {
    let x;
    let y = 160 + (pos * 40)
    if (side == "left") {
        x = 30;
    } else if (side == "right") {
        x = 570;
    };

    const indicator = k.add([
        k.text("<", {
            font: "arial",
            size: 24,
            width: 24,
            align: "center"
        }),
        k.pos(x, y),
        k.color(200,200,200),
        k.anchor("top"),
        k.scale(1)
    ]);
};