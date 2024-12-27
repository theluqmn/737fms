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
}

function selectButton(k, text, x, y) {
    const buttonFrame = k.add([
        k.rect(80, 50),
        k.pos(x, y),
        k.color(255,255,255),
        k.anchor("top")
    ]);

    const buttonText = k.add([
        k.text(text, {
            font: "arial",
            size: 30,
            width: 80
        }),
        k.pos(x, y),
        k.color(0,0,0),
        k.anchor("top")
    ]);
}