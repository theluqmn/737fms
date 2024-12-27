export default function FMS(k) {
    k.scene("fms", () => {
        k.add([
            k.text("proudly made with kaplayjs", {
                font: "arial",
                size: 15,
                width: 500
            }),
            k.pos(k.width() / 2, 20),
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
        k.pos(k.width() / 2, 100),
        k.color(20,20,20),
        k.anchor("top")
    ]);

    const plate = k.add([
        k.rect(480, 780),
        k.pos(k.width() / 2, 110),
        k.color(30,30,30),
        k.anchor("top")
    ]);
};

function displayComponent(k) {
    const frame = k.add([
        k.rect(400, 340),
        k.pos(k.width() / 2, 130),
        k.color(25,25,25),
        k.anchor("top")
    ]);

    const screen = k.add([
        k.rect(360, 300),
        k.pos(k.width() / 2, 150),
        k.color(0,0,0),
        k.anchor("top")
    ]);
}