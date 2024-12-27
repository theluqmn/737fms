import { displayText } from "../components/display";

export const displayContents = {
    title: "Boeing 737NG FMS",
    left: {
        1: { text: "<TEST", heading: " SET TITLE" },
        2: { text: "<BOEING 737NG", heading: "" },
        3: { text: "<HIGHSEAS", heading: "" },
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
    const headingLeft2 = displayText(k, "left", "heading", 240, "left", displayContents.left[2].heading);

    const textLeft1 = displayText(k, "left", "text", 200, "left", displayContents.left[1].text);
    const textLeft2 = displayText(k, "left", "text", 240, "left", displayContents.left[2].text);
    const textLeft3 = displayText(k, "left", "text", 280, "left", displayContents.left[3].text);

    k.onUpdate(() => {
        title.text = displayContents.title;
        headingLeft1.text = displayContents.left[1].heading;

        textLeft1.text = displayContents.left[1].text;
        textLeft2.text = displayContents.left[2].text;
        textLeft3.text = displayContents.left[3].text;
    });
}