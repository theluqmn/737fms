import { displayText } from "../components/display";
import { addScratchpadText, clearScratchpadText, scratchpadText } from "./inputEngine";

export const displayContents = {
    title: "",
    page: [0,0],
    left: {
        1: { heading: "", text: ""},
        2: { heading: "", text: ""},
        3: { heading: "", text: ""},
        4: { heading: "", text: ""},
        5: { heading: "", text: ""},
        6: { heading: "", text: ""},
    },
    right: {
        1: { heading: "", text: ""},
        2: { heading: "", text: ""},
        3: { heading: "", text: ""},
        4: { heading: "", text: ""},
        5: { heading: "", text: ""},
        6: { heading: "", text: ""},
    },
    scratchpad: scratchpadText,
}

export function setTitle(title) {
    displayContents.title = title;
};

export function setLineText(side, line, heading, text) {
    displayContents[side][line].heading = heading;
    displayContents[side][line].text = text;
};

export function scratchpadInsert(side, line) {
    if (scratchpadText.length > 0) {
        displayContents[side][line].text = scratchpadText;
        clearScratchpadText();
    }
}

export function scratchpadCopy(side, line) {
    clearScratchpadText();
    addScratchpadText(displayContents[side][line].text);
}

export function clearLines() {
    displayContents.title = ""
    displayContents.page = [0,0]
    
    for (let i = 1; i <= 6; i++) {
        displayContents.left[i] = { heading: "", text: ""}
        displayContents.right[i] = { heading: "", text: ""}
    }
}

export function setPage(current, total) {
    displayContents.page[0] = current;
    displayContents.page[1] = total; 
};

export function displayEngine(k) {
    let left = displayContents.left
    let right = displayContents.right

    const title = displayText(k, "left", "main", 160, "center", displayContents.title);
    const page = displayText(k, "right", "main", 160, "right", "1/1");
    const scratchpad = displayText(k, "left", "main", 430, "left", displayContents.scratchpad);

    // left side
    const headingLeft1 = displayText(k, "left", "heading", 200, "left", left[1].heading);
    const headingLeft2 = displayText(k, "left", "heading", 240, "left", left[2].heading);
    const headingLeft3 = displayText(k, "left", "heading", 280, "left", left[3].heading);
    const headingLeft4 = displayText(k, "left", "heading", 320, "left", left[4].heading);
    const headingLeft5 = displayText(k, "left", "heading", 360, "left", left[5].heading);
    const headingLeft6 = displayText(k, "left", "heading", 400, "left", left[6].heading);

    const textLeft1 = displayText(k, "left", "text", 200, "left", left[1].text);
    const textLeft2 = displayText(k, "left", "text", 240, "left", left[2].text);
    const textLeft3 = displayText(k, "left", "text", 280, "left", left[3].text);
    const textLeft4 = displayText(k, "left", "text", 320, "left", left[4].text);
    const textLeft5 = displayText(k, "left", "text", 360, "left", left[5].text);
    const textLeft6 = displayText(k, "left", "text", 400, "left", left[6].text);

    // right side
    const headingRight1 = displayText(k, "right", "heading", 200, "right", right[1].heading);
    const headingRight2 = displayText(k, "right", "heading", 240, "right", right[2].heading);
    const headingRight3 = displayText(k, "right", "heading", 280, "right", right[3].heading);
    const headingRight4 = displayText(k, "right", "heading", 320, "right", right[4].heading);
    const headingRight5 = displayText(k, "right", "heading", 360, "right", right[5].heading);
    const headingRight6 = displayText(k, "right", "heading", 400, "right", right[6].heading);

    const textRight1 = displayText(k, "right", "text", 200, "right", right[1].text);
    const textRight2 = displayText(k, "right", "text", 240, "right", right[2].text);
    const textRight3 = displayText(k, "right", "text", 280, "right", right[3].text);
    const textRight4 = displayText(k, "right", "text", 320, "right", right[4].text);
    const textRight5 = displayText(k, "right", "text", 360, "right", right[5].text);
    const textRight6 = displayText(k, "right", "text", 400, "right", right[6].text);

    k.onUpdate(() => {
        title.text = displayContents.title;
        scratchpad.text = scratchpadText;

        // page number
        if (displayContents.page[0] >= 1) {
            page.text = displayContents.page[0] + "/" + displayContents.page[1];
        } else {
            page.text = "";
        }

        // heading
        headingLeft1.text = left[1].heading;
        headingLeft2.text = left[2].heading;
        headingLeft3.text = left[3].heading;
        headingLeft4.text = left[4].heading;
        headingLeft5.text = left[5].heading;
        headingLeft6.text = left[6].heading;
        headingRight1.text = right[1].heading;
        headingRight2.text = right[2].heading;
        headingRight3.text = right[3].heading;
        headingRight4.text = right[4].heading;
        headingRight5.text = right[5].heading;
        headingRight6.text = right[6].heading;
        // text
        textLeft1.text = left[1].text;
        textLeft2.text = left[2].text;
        textLeft3.text = left[3].text;
        textLeft4.text = left[4].text;
        textLeft5.text = left[5].text;
        textLeft6.text = left[6].text;
        textRight1.text = right[1].text;
        textRight2.text = right[2].text;
        textRight3.text = right[3].text;
        textRight4.text = right[4].text;
        textRight5.text = right[5].text;
        textRight6.text = right[6].text;
    });
}