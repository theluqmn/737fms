import FMS from "../functions/fms";
import { setTitle, setPage, setLineText} from "../functions/displayEngine";
import { input, handleInput } from "../functions/inputEngine";

export default function indexScene(k) {
    k.scene("index", () => {
        FMS(k);
        setTitle("INIT/REF INDEX");
        setPage(1,1)

        setLineText("left", 1, "", "<IDENT")
        const toIDENT = handleInput(() => {
            k.go("ident")
        })

        setLineText("left", 2, "", "<POS4", false)
        setLineText("left", 3, "", "<PERF")
        setLineText("left", 4, "", "<TAKEOFF")
        setLineText("left", 5, "", "<APPROACH")
        setLineText("left", 6, "", "<OFFSET")

        setLineText("right", 1, "", "NAV DATA>")
        setLineText("right", 5, "", "SEL CONFIG>")
        setLineText("right", 6, "", "MAINT>")

        k.onUpdate(() => {
            toIDENT(input.line.left[1])
        })
    });
};