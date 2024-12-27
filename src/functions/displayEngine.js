import { displayText } from "../components/display";

export const displayContents = {
    title: "Boeing 737NG FMS",
    left: {
        1: { text: "TEST", heading: "TEST HEADING" },
        2: { text: "", heading: "" },
        3: { text: "", heading: "" },
        4: { text: "", heading: "" },
        5: { text: "", heading: "" },
        6: { text: "", heading: "" },
    },
    right: {
        1: { text: "", heading: "" },
        2: { text: "", heading: "" },
        3: { text: "", heading: "" },
        4: { text: "", heading: "" },
        5: { text: "", heading: "" },
        6: { text: "", heading: "" },
    },
    bottom: ""
}

export function displayEngine(k) {
    const title = displayText(k, "left", "main", 160, "center", displayContents.title);

    // left side
    const headingLeft1 = displayText(k, "left", "heading", 200, "left", displayContents.left[1].heading);
    const textLeft1 = displayText(k, "left", "text", 200, "left", displayContents.left[1].text);

    k.onUpdate(() => {
        title.text = displayContents.title;
        headingLeft1.text = displayContents.left[1].heading;
        textLeft1.text = displayContents.left[1].text;
    });
}