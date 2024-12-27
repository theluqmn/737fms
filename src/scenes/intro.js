export default function Intro(k) {
    k.scene("intro", () => {
        const title = k.add([
            k.text("Boeing 737NG Flight Management System Simulator", {
                font: "Arial",
                size: 50,
                width: 500
            }),
            k.pos(k.width() / 2, 50),
            k.anchor("top")
        ])

        const descriptionn = k.add([
            k.text("A simulator for the Boeing 737NG Flight Management System. This is a project for the University of Southampton, and is not affiliated with Boeing in any way.", {
                font: "Arial",
                size: 20,
                width: 500
            }),
            k.pos(k.width() / 2, 200),
            k.color(225,225,225),
            k.anchor("top")
        ])

        const noticeBox = k.add([
            k.rect(500, 150),
            k.pos(k.width() / 2, 400),
            k.color(255, 255, 255),
            k.anchor("top")
        ]);

        const noticeText = k.add([
            k.text("This project is optimised only for 16:9 (laptop/desktop) displays and is not designed with mobile friendliness in mind.", {
                font: "Arial",
                size: 30,
                width: 480
            }),
            k.pos(k.width() / 2, 415),
            k.color(0, 0, 0),
            k.anchor("top")
        ])

    });
}