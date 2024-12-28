export default function Numerical(k) {
    button(k, 115, 686, "1");
    button(k, 160, 686, "2");
    button(k, 205, 686, "3");
    // row 2
    button(k, 115, 734, "4");
    button(k, 160, 734, "5");
    button(k, 205, 734, "6");
    // row 3
    button(k, 115, 782, "7");
    button(k, 160, 782, "8");
    button(k, 205, 782, "9");
    // row 4
    button(k, 115, 830, ".");
    button(k, 160, 830, "0");
    button(k, 205, 830, "+/=");
}
function button(k, x, y, textInput, onClick) {
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