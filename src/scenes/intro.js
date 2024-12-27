export default function Intro(k) {
    k.scene("intro", () => {
        const title = k.add([
            k.text("Boeing 737NG Flight Management System Simulator", {
                font: "arial",
                size: 50,
                width: 500
            }),
            k.pos(k.width() / 2, 50),
            k.anchor("top")
        ])
        const descriptionn = k.add([
            k.text("A web-based simulator of the Boeing 737-800's flight management system (FMS). Not affliated with Boeing, this is a project for educational purposes only.", {
                font: "arial",
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
            k.color(241,196,15),
            k.anchor("top")
        ]);
        const noticeText = k.add([
            k.text("This project is optimised only for 16:9 (laptop/desktop) displays and is not designed with mobile friendliness in mind.", {
                font: "arial",
                size: 30,
                width: 480
            }),
            k.pos(k.width() / 2, 415),
            k.color(0, 0, 0),
            k.anchor("top")
        ])

        const startButton = k.add([
            k.rect(500, 50),
            k.pos(k.width() / 2, 560),
            k.color(255, 255, 255),
            k.anchor("top")
        ]);
        const startText = k.add([
            k.text("Start", {
                font: "arial",
                size: 30,
                width: 500,
                align: "center"
            }),
            k.pos(k.width() / 2, 575),
            k.color(0, 0, 0),
            k.anchor("top")
        ]);

        const githubButton = k.add([
            k.rect(500, 50),
            k.pos(k.width() / 2, 620),
            k.color(255, 255, 255),
            k.anchor("top")
        ]);
        const githubText = k.add([
            k.text("GitHub Repository", {
                font: "arial",
                size: 30,
                width: 500,
                align: "center"
            }),
            k.pos(k.width() / 2, 635),
            k.color(0, 0, 0),
            k.anchor("top")
        ]);

        const tutorialButton = k.add([
            k.rect(500, 50),
            k.pos(k.width() / 2, 680),
            k.color(255, 255, 255),
            k.anchor("top")
        ]);
        const tutorialText = k.add([
            k.text("YouTube Tutorial", {
                font: "arial",
                size: 30,
                width: 500,
                align: "center"
            }),
            k.pos(k.width() / 2, 695),
            k.color(0, 0, 0),
            k.anchor("top")
        ]);
    });
}