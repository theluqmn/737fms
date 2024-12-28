import FMS from "../functions/fms";
import { setTitle, setPage, setLineText, clearLines} from "../functions/displayEngine";
import { input, handleInput } from "../functions/inputEngine";

export default function perfInitScene(k) {
    k.scene("perf-init", () => {
        FMS(k);
        clearLines();

        setTitle("PERF INIT");
        setPage(1,2)

        setLineText("left", 1, " GW/CRZ CG", "---.-/ 5.0")
        setLineText("left", 2, " PLAN/FUEL", "/ 4.8")
        setLineText("left", 3, " ZFW", "---.-")
        setLineText("left", 4, " RESERVES", "--.-")
        setLineText("left", 5, " COST INDEX", "---")
        
        setLineText("right", 1, "", "NAV DATA>")
        setLineText("right", 5, "", "SEL CONFIG>")
        setLineText("right", 6, "", "MAINT>")

        setLineText("left", 6, "-----------------", "<INDEX")
        const toINDEX = handleInput(() => {
            k.go("index")
        })

        setLineText("right", 6, "-----------------", "N1 LIMIT>")

        k.onUpdate(() => {
            toINDEX(input.line.left[6])
        })
    });
};