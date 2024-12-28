export default function Alphabetical(k) {
    // row 1
    button(k, 266, 590, "A");
    button(k, 319, 590, "B");
    button(k, 372, 590, "C");
    button(k, 425, 590, "D");
    button(k, 478, 590, "E");
    // row 2
    button(k, 266, 638, "F");
    button(k, 319, 638, "G");
    button(k, 372, 638, "H");
    button(k, 425, 638, "I");
    button(k, 478, 638, "J");
    // row 3
    button(k, 266, 686, "K");
    button(k, 319, 686, "L");
    button(k, 372, 686, "M");
    button(k, 425, 686, "N");
    button(k, 478, 686, "O");
    // row 4
    button(k, 266, 734, "P");
    button(k, 319, 734, "Q");
    button(k, 372, 734, "R");
    button(k, 425, 734, "S");
    button(k, 478, 734, "T");
    // row 5
    button(k, 266, 782, "U");
    button(k, 319, 782, "V");
    button(k, 372, 782, "W");
    button(k, 425, 782, "X");
    button(k, 478, 782, "Y");
    // row 6
    button(k, 266, 830, "Z");
    button(k, 319, 830, "SP");
    button(k, 372, 830, "DEL");
    button(k, 425, 830, "/");
    button(k, 478, 830, "CLR");
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