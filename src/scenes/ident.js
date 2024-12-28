import FMS from "../functions/fms";
import { setTitle, setPage, setLineText, clearLines} from "../functions/displayEngine";
import { input, handleInput } from "../functions/inputEngine";

export default function identScene(k) {
    k.scene("ident", () => {
        FMS(k);
        clearLines();

        setTitle("IDENT");
        setPage(0,0)

        setLineText("left", 1, "MODEL", "737-800")
        setLineText("left", 2, "NAV DATA", "AIRAC-0304")
        setLineText("left", 4, "OP PROGRAM", "PMDG 737NG SU2")
        setLineText("left", 5, "", "(U10.4)")

        setLineText("right", 1, "ENG RATING", "24K")
        setLineText("right", 2, "ACTIVE", "/14AP/14MA/03")

        setLineText("left", 6, "-----------------", "<INDEX")
        const toINDEX = handleInput(() => {
            k.go("index")
        })

        setLineText("right", 6, "-----------------", "POS INIT>")
        const toPOSINIT = handleInput(() => {
            k.go("pos-init")
        })

        k.onUpdate(() => {
            toINDEX(input.line.left[6])
            toPOSINIT(input.line.right[6])
        })
    });
};