export default function Numerical(k) {

}

function button(k, x, y, textInput, onClick) {
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