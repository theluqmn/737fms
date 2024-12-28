import { displayText } from "../components/display";
import { inputText } from "./inputEngine";

export const displayContents = {
    title: "Boeing 737NG FMS",
    page: [1,1],
    left: {
        1: { text: "<TEST", heading: " SET TITLE" },
        2: { text: "<BOEING 737NG", heading: "" },
        3: { text: "<HIGHSEAS", heading: "" },
        4: { text: "", heading: "" },
        5: { text: "", heading: "" },
        6: { text: "", heading: "-----------------" },
    },
    right: {
        1: { text: "GITHUB>", heading: "LINKS" },
        2: { text: "ITCH.IO>", heading: "" },
        3: { text: "DEMO>", heading: "" },
        4: { text: "DOCUMENTATION>", heading: "" },
        5: { text: "YOUTUBE TUTOR>", heading: "" },
        6: { text: "START>", heading: "-----------------" },
    },
    scratchpad: inputText,
}

export function displayEngine(k) {
    const title = displayText(k, "left", "main", 160, "center", displayContents.title);
    const page = displayText(k, "right", "main", 160, "center", "1/1");
    const scratchpad = displayText(k, "left", "main", 430, "left", displayContents.scratchpad);

    // left side
    const headingLeft1 = displayText(k, "left", "heading", 200, "left", displayContents.left[1].heading);
    const headingLeft2 = displayText(k, "left", "heading", 240, "left", displayContents.left[2].heading);
    const headingLeft3 = displayText(k, "left", "heading", 280, "left", displayContents.left[3].heading);
    const headingLeft4 = displayText(k, "left", "heading", 320, "left", displayContents.left[4].heading);
    const headingLeft5 = displayText(k, "left", "heading", 360, "left", displayContents.left[5].heading);
    const headingLeft6 = displayText(k, "left", "heading", 400, "left", displayContents.left[6].heading);

    const textLeft1 = displayText(k, "left", "text", 200, "left", displayContents.left[1].text);
    const textLeft2 = displayText(k, "left", "text", 240, "left", displayContents.left[2].text);
    const textLeft3 = displayText(k, "left", "text", 280, "left", displayContents.left[3].text);
    const textLeft4 = displayText(k, "left", "text", 320, "left", displayContents.left[4].text);
    const textLeft5 = displayText(k, "left", "text", 360, "left", displayContents.left[5].text);
    const textLeft6 = displayText(k, "left", "text", 400, "left", displayContents.left[6].text);

    // right side
    const headingRight1 = displayText(k, "right", "heading", 200, "right", displayContents.right[1].heading);
    const headingRight2 = displayText(k, "right", "heading", 240, "right", displayContents.right[2].heading);
    const headingRight3 = displayText(k, "right", "heading", 280, "right", displayContents.right[3].heading);
    const headingRight4 = displayText(k, "right", "heading", 320, "right", displayContents.right[4].heading);
    const headingRight5 = displayText(k, "right", "heading", 360, "right", displayContents.right[5].heading);
    const headingRight6 = displayText(k, "right", "heading", 400, "right", displayContents.right[6].heading);

    const textRight1 = displayText(k, "right", "text", 200, "right", displayContents.right[1].text);
    const textRight2 = displayText(k, "right", "text", 240, "right", displayContents.right[2].text);
    const textRight3 = displayText(k, "right", "text", 280, "right", displayContents.right[3].text);
    const textRight4 = displayText(k, "right", "text", 320, "right", displayContents.right[4].text);
    const textRight5 = displayText(k, "right", "text", 360, "right", displayContents.right[5].text);
    const textRight6 = displayText(k, "right", "text", 400, "right", displayContents.right[6].text);


    k.onUpdate(() => {
        title.text = displayContents.title;
        scratchpad.text = displayContents.scratchpad;

        // page number
        if (displayContents.page[1] >= 2) {
            page.text = displayContents.page[0] + "/" + displayContents.page[1];
        } else {
            page.text = "";
        }

        // right
        headingLeft1.text = displayContents.left[1].heading;
        headingLeft2.text = displayContents.left[2].heading;
        headingLeft3.text = displayContents.left[3].heading;
        headingLeft4.text = displayContents.left[4].heading;
        headingLeft5.text = displayContents.left[5].heading;
        headingLeft6.text = displayContents.left[6].heading;
        headingRight1.text = displayContents.right[1].heading;
        headingRight2.text = displayContents.right[2].heading;
        headingRight3.text = displayContents.right[3].heading;
        headingRight4.text = displayContents.right[4].heading;
        headingRight5.text = displayContents.right[5].heading;
        headingRight6.text
        // left
        textLeft1.text = displayContents.left[1].text;
        textLeft2.text = displayContents.left[2].text;
        textLeft3.text = displayContents.left[3].text;
        textLeft4.text = displayContents.left[4].text;
        textLeft5.text = displayContents.left[5].text;
        textLeft6.text = displayContents.left[6].text;
        textRight1.text = displayContents.right[1].text;
        textRight2.text = displayContents.right[2].text;
        textRight3.text = displayContents.right[3].text;
        textRight4.text = displayContents.right[4].text;
        textRight5.text = displayContents.right[5].text;
        textRight6.text = displayContents.right[6].text;
    });
}