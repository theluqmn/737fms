import FMS from "../functions/fms";
import { setTitle, setPage, setLineText, clearLines, scratchpadInsert } from "../functions/displayEngine";
import { input, handleInput } from "../functions/inputEngine";

export default function posInitScene(k) {
    k.scene("pos-init", () => {
        FMS(k);
        clearLines();

        setTitle("POS INIT");
        setPage(1,3)

        setLineText("left", 1, " GW/CRZ CG", "---.-/ 5.0")
        setLineText("left", 2, " REF AIRPORT", "----")
        setLineText("left", 3, " GATE", "-----")
        setLineText("left", 5, " GMT-MON/DY", "---")
        
        setLineText("right", 1, "LAST POS", "N47°15.6 E011°20.5")
        setLineText("right", 2, "CRZ WIND", "---°/---")
        setLineText("right", 5, "TRANS ALT", "5000")
        
        setLineText("left", 6, "-----------------", "<INDEX")
        const toINDEX = handleInput(() => {
            k.go("index")
        })

        setLineText("right", 6, "-----------------", "ROUTE>")

        k.onUpdate(() => {
            toINDEX(input.line.left[6])
        })
    });
};