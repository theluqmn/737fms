export default function Intro(k) {
    k.scene("intro", () => {
        k.add([
            k.text("Boeing 737NG Flight Management System Simulator", {
                font: "Arial",
                size: 50,
                width: 500
            }),
            k.pos(k.width() / 2, k.height() / 2),
            k.anchor("center")
        ])
    });
}