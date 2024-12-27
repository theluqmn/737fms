import { displayComponent } from "../components/display";

export default function FMS(k) {
    k.scene("fms", () => {
        k.add([
            k.text("proudly made with kaplayjs", {
                font: "arial",
                size: 18,
                width: 500
            }),
            k.pos(300, 5),
            k.color(0,0,0),
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