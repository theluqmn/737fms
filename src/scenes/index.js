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

An index of all the available pages.

Ones that are functioning (opens the respective page):
- IDENT
- POS
- PERF
- TAKEOFF
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
        const toPOS = handleInput(() => {
            k.go("pos-init-1")
            lineSelectKeyTimeout("left", 2)
        })

        setLineText("left", 3, "", "<PERF")
        const toPERF = handleInput(() => {
            k.go("perf-init")
            lineSelectKeyTimeout("left", 3)
        })
        
        setLineText("left", 4, "", "<TAKEOFF")
        const toTAKEOFF = handleInput(() => {
            k.go("takeoff")
            lineSelectKeyTimeout("left", 4)
        })

        setLineText("left", 5, "", "<APPROACH")
        setLineText("left", 6, "", "<OFFSET")

        setLineText("right", 1, "", "NAV DATA>")
        setLineText("right", 5, "", "SEL CONFIG>")
        setLineText("right", 6, "", "MAINT>")

        k.onUpdate(() => {
            toIDENT(input.line.left[1])
            toPOS(input.line.left[2])
            toPERF(input.line.left[3])
            toTAKEOFF(input.line.left[4])
        })
    });
};