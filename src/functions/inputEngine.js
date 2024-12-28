let scratchpadText = "";
export function addScratchpadText(input) { scratchpadText += input; };
export function clearScratchpadText() { scratchpadText = ""; };

let input = {
    alphabetical: {
        a: false, b: false, c: false, d: false, e: false,
        f: false, g: false, h: false, i: false, j: false,
        k: false, l: false, m: false, n: false, o: false,
        p: false, q: false, r: false, s: false, t: false,
        u: false, v: false, w: false, x: false, y: false,
        z: false,
    },
    numerical: {
        0: false, 1: false, 2: false, 3: false, 4: false,
        5: false, 6: false, 7: false, 8: false, 9: false,
        ".": false, "+/-": false,
    },
    mode: {
        init: false, rte: false, clb: false, crz: false, des: false,
        menu: false, legs: false, depArr: false, hold: false, prog: false,
        n1Limit: false, fix: false, prevPage: false, nextPage: false,
        exec: false,
    }
}

export function inputRegister(type, key) {
    if (type == "alphabetical") {
        input.alphabetical[key] = true;
    } else if (type == "numerical") {
        input.numerical[key] = true;
    } else if (type == "mode") {
        input.mode[key] = true;
    }

    console.log(`${type} ${key} registered`);
}

export function inputTimeout(type, key) {
    if (type == "alphabetical") {
        input.alphabetical[key] = false;
    } else if (type == "numerical") {
        input.numerical[key] = false;
    } else if (type == "mode") {
        input.mode[key] = false;
    }
}

export { scratchpadText, input };