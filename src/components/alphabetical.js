export default function Alphabetical(k) {
    // row 1
    button(k, 266, 580, "A");
    button(k, 319, 580, "B");
    button(k, 372, 580, "C");
    button(k, 425, 580, "D");
    button(k, 478, 580, "E");
    // row 2
    button(k, 266, 628, "F");
    button(k, 319, 628, "G");
    button(k, 372, 628, "H");
    button(k, 425, 628, "I");
    button(k, 478, 628, "J");
    // row 3
    button(k, 266, 676, "K");
    button(k, 319, 676, "L");
    button(k, 372, 676, "M");
    button(k, 425, 676, "N");
    button(k, 478, 676, "O");
    // row 4
    button(k, 266, 724, "P");
    button(k, 319, 724, "Q");
    button(k, 372, 724, "R");
    button(k, 425, 724, "S");
    button(k, 478, 724, "T");
    // row 5
    button(k, 266, 772, "U");
    button(k, 319, 772, "V");
    button(k, 372, 772, "W");
    button(k, 425, 772, "X");
    button(k, 478, 772, "Y");

    // row 6
    button(k, 266, 820, "Z");
    button(k, 319, 820, "SP");
    button(k, 372, 820, "DEL");
    button(k, 425, 820, "/");
    button(k, 478, 820, "CLR");
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