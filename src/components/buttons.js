export function displayButton(k, side, x, y, onClick) {
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