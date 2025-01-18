import FMS from "../functions/fms";
import { setTitle, setPage, setLineText, clearLines, scratchpadInsert, scratchpadCopy } from "../functions/displayEngine";
import { input, handleInput, inputTimeout, lineSelectKeyTimeout } from "../functions/inputEngine";

export function takeoffScene(k) {
    k.scene("takeoff", () => {
        FMS(k);
        clearLines();

        setTitle("TAKEOFF REF");
        setPage(1,2);

        setLineText("left", 1, " FLAPS", "▯▯°");
        setLineText("left", 2, "26.4 N1", "94.6/94.4%");
        setLineText("left", 3, " CG   TRIM", "---   ---");
        setLineText("left", 4, " TAKEOFF DATA GW / TOW", "<REQUEST");
        
        setLineText("right", 1, "V1", "---");
        setLineText("right", 2, "VR", "---");
        setLineText("right", 3, "V2", "---");
        
        setLineText("left", 6, "-----------------", "<INDEX")
        const toINDEX = handleInput(() => {
            k.go("index");
            lineSelectKeyTimeout("left", 6);
        });

        setLineText("right", 6, "-----------------", "")
        
        k.onUpdate(() => {
            toINDEX(input.line.left[6]);
        });
    });
};