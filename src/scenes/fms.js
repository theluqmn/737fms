export default function FMS(k) {
    k.scene("fms", () => {
        const button = k.add([
            k.rect(30,20),
            k.pos(10,10),
            k.color(255,255,255)
        ]);

        frameComponent(k);
    });
};

function frameComponent(k) {
    const frameFMS = k.add([
        k.rect(500, 800),
        k.pos(k.width() / 2, k.height() / 2),
        k.color(20,20,20),
        k.anchor("center")
    ])
}