
let scratchpadText = "";

export function addInputText(input) {
    scratchpadText += input;
}

export function clearInputText() {
    scratchpadText = "";
}

export { scratchpadText };