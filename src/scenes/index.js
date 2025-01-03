import FMS from "../functions/fms";
import { setTitle, setPage, setLineText, clearLines} from "../functions/displayEngine";
import { input, handleInput, lineSelectKeyTimeout } from "../functions/inputEngine";

export default function indexScene(k) {
    k.scene("index", () => {
        FMS(k);
        clearLines();

        setTitle("INIT/REF INDEX");
        setPage(1,1)

        k.add([
            k.text(`
INDEX

A list of all the available index pages.

Ones that are functioning (opens the respective page):
- IDENT
- PERF

WARNING: The PERF page is extremely buggy due to an
issue with kaplayjs. Visiting the page will wreak havoc
on the display's texts.
                `, {
                    font: "Arial",
                    size: 18,
                }),
            k.pos(600, 100)
        ])

        setLineText("left", 1, "", "<IDENT")
        const toIDENT = handleInput(() => {
            k.go("ident")
            lineSelectKeyTimeout("left", 1)
        })

        setLineText("left", 2, "", "<POS")

        setLineText("left", 3, "", "<PERF")
        const toPERF = handleInput(() => {
            k.go("perf-init")
            lineSelectKeyTimeout("left", 3)
        })
        
        setLineText("left", 4, "", "<TAKEOFF")
        setLineText("left", 5, "", "<APPROACH")
        setLineText("left", 6, "", "<OFFSET")

        setLineText("right", 1, "", "NAV DATA>")
        setLineText("right", 5, "", "SEL CONFIG>")
        setLineText("right", 6, "", "MAINT>")

        k.onUpdate(() => {
            toIDENT(input.line.left[1])
            toPERF(input.line.left[3])
        })
    });
};