export function frameComponent(k) {
    const frame = k.add([
        k.rect(500, 800, {
            radius: 20
        }),
        k.pos(300, 100),
        k.color(20,20,20),
        k.anchor("top")
    ]);

    const plate = k.add([
        k.rect(480, 780, {
            radius: 15
        }),
        k.pos(300, 110),
        k.color(30,30,30),
        k.anchor("top")
    ]);
};