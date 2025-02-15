export default function introScene(k) {
    k.scene("intro", () => {
        // title and description
        const title = k.add([
            k.text("Boeing 737NG Flight Management System Simulator", {
                font: "arial",
                size: 50,
                width: 500
            }),
            k.pos(300, 50),
            k.anchor("top")
        ])
        const descriptionn = k.add([
            k.text(`
A web-based simulator of the Boeing 737-800's flight management system (FMS). Not affliated with Boeing, this is a project for educational purposes only.

It is recommended that you have a basic background in aviation to understand how the FMS works, or at the very least, check the YouTube tutorial linked below.
                `, {
                font: "arial",
                size: 20,
                width: 500
            }),
            k.pos(300, 200),
            k.color(225,225,225),
            k.anchor("top")
        ])

        // notice box
        const noticeBox = k.add([
            k.rect(500, 150),
            k.pos(300, 400),
            k.color(241,196,15),
            k.anchor("top")
        ]);
        const noticeText = k.add([
            k.text("Designed for 16:9 1080p displays and is not optimized for mobile devices. A work in progress - certain features may not work as intended!", {
                font: "arial",
                size: 28,
                width: 480
            }),
            k.pos(300, 415),
            k.color(0, 0, 0),
            k.anchor("top")
        ])

        // start button
        const startButton = k.add([
            k.rect(500, 50),
            k.pos(300, 560),
            k.color(255, 255, 255),
            k.anchor("top"),
            k.area()
        ]);
        const startText = k.add([
            k.text("Start", {
                font: "arial",
                size: 30,
                width: 500,
                align: "center"
            }),
            k.pos(300, 575),
            k.color(0, 0, 0),
            k.anchor("top")
        ]);

        // github button
        const githubButton = k.add([
            k.rect(500, 50),
            k.pos(300, 620),
            k.color(255, 255, 255),
            k.anchor("top"),
            k.area()
        ]);
        const githubText = k.add([
            k.text("GitHub Repository", {
                font: "arial",
                size: 30,
                width: 500,
                align: "center"
            }),
            k.pos(300, 635),
            k.color(0, 0, 0),
            k.anchor("top")
        ]);

        // tutorial button
        const tutorialButton = k.add([
            k.rect(500, 50),
            k.pos(300, 680),
            k.color(255, 255, 255),
            k.anchor("top"),
            k.area()
        ]);
        const tutorialText = k.add([
            k.text("YouTube Tutorial", {
                font: "arial",
                size: 30,
                width: 500,
                align: "center"
            }),
            k.pos(300, 695),
            k.color(0, 0, 0),
            k.anchor("top")
        ]);

        // logic for buttons
        startButton.onHover(() => { startButton.color = k.rgb(225,225,225) });
        startButton.onHoverEnd(() => { startButton.color = k.rgb(255,255,255) });
        startButton.onClick(() => { k.go("ident") });

        githubButton.onHover(() => { githubButton.color = k.rgb(225,225,225) });
        githubButton.onHoverEnd(() => { githubButton.color = k.rgb(255,255,255) });
        githubButton.onClick(() => { window.open("https://github.com/theluqmn/737fms") });

        tutorialButton.onHover(() => { tutorialButton.color = k.rgb(225,225,225) });
        tutorialButton.onHoverEnd(() => { tutorialButton.color = k.rgb(255,255,255) });
        tutorialButton.onClick(() => { window.open("https://www.youtube.com/watch?v=T2EmaW7Q5vU&t=208s") });
    });
}