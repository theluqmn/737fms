import FMS from "../functions/fms";
import { setTitle, setPage, setLineText, clearLines, scratchpadInsert } from "../functions/displayEngine";
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
        const addCostIndex = handleInput(() => {
            scratchpadInsert("left", 5)
        })
        
        setLineText("right", 1, "TRIP/CRZ ALT", "-----")
        setLineText("right", 2, "CRZ WIND", "---°/---")
        setLineText("right", 5, "TRANS ALT", "5000")
        
        setLineText("left", 6, "-----------------", "<INDEX")
        const toINDEX = handleInput(() => {
            k.go("index")
        })

        setLineText("right", 6, "-----------------", "N1 LIMIT>")
        const toN1LIMIT = handleInput(() => {
            k.go("n1-limit")
        })

        k.onUpdate(() => {
            toINDEX(input.line.left[6])
            toN1LIMIT(input.line.right[6])
            
            addCostIndex(input.line.left[5])
        })
    });
};