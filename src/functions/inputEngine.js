let scratchpadText = "";
export function addScratchpadText(input) { scratchpadText += input; };
export function clearScratchpadText() { scratchpadText = ""; };

let input = {
    line: {
        left: {
            1: false, 2: false, 3: false, 4: false, 5: false, 6: false
        },
        right: {
            1: false, 2: false, 3: false, 4: false, 5: false, 6: false
        }
    },
    mode: {
        INIT: false, RTE: false, CLB: false, CRZ: false, DES: false,
        MENU: false, LEGS: false, DEPARR: false, HOLD: false, PROG: false,
        N1LIMIT: false, FIX: false, PREVPAGE: false, NEXTPAGE: false,
        EXEC: false,
    },
    alphabetical: {
        A: false, B: false, C: false, D: false, E: false,
        F: false, G: false, H: false, I: false, J: false,
        K: false, L: false, M: false, N: false, O: false,
        P: false, Q: false, R: false, S: false, T: false,
        U: false, V: false, W: false, X: false, Y: false,
        Z: false, "SP": false, "DEL": false, "/": false, "CLR": false,
    },
    numerical: {
        0: false, 1: false, 2: false, 3: false, 4: false,
        5: false, 6: false, 7: false, 8: false, 9: false,
        ".": false, "+/-": false,
    }
}

export function lineSelectKeyRegister(side, line) { input.line[side][line] = true; console.log(`${side} ${line} key registered`); };
export function lineSelectKeyTimeout(side, line) { input.line[side][line] = false; };

export function inputRegister(type, key) {
    if (type == "alphabetical") {
        input.alphabetical[key] = true;

        if (key == "CLR") {
            clearScratchpadText();
            return;
        } else if (key == "DEL") {
            if (scratchpadText.length > 0) {
                scratchpadText = scratchpadText.slice(0, -1);
            }
            return;
        } else if (key == "SP") {
            scratchpadText += " ";
            return;
        }

        addScratchpadText(key);

    } else if (type == "numerical") {
        input.numerical[key] = true;

        if (key == "+/-") {
            return;
        }

        addScratchpadText(key);

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
    };
};

export { scratchpadText, input };