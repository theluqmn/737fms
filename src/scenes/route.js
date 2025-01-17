import FMS from "../functions/fms";
import { setTitle, setPage, setLineText, clearLines, scratchpadInsert, scratchpadCopy } from "../functions/displayEngine";
import { input, handleInput, inputTimeout, lineSelectKeyTimeout } from "../functions/inputEngine";

export function routeScene(k) {
    k.scene("route-1", () => {
        FMS(k);
        clearLines();

        setTitle("ROUTE");
        setPage(1,2);

        setLineText("left", 1, " ORIGIN", "-----");
        setLineText("left", 2, " CO ROUTE", "----------");
        setLineText("left", 3, " RUNWAY", "---");
        setLineText("left", 4, " VIA", "-----");
        
        setLineText("right", 1, "DEST", "▯▯▯▯▯");
        setLineText("right", 2, "FLT NO.", "--------");
        setLineText("right", 4, "TO", "-----");
        
        setLineText("left", 6, "-----------------", "<ALTN DEST")
        const toINDEX = handleInput(() => {
            k.go("pos-init-1");
            lineSelectKeyTimeout("left", 6);
        });

        setLineText("right", 6, "-----------------", "")

        const pageNext = handleInput(() => {
            k.go("pos-init-2");
            inputTimeout("mode", "NEXT\nPAGE");
        });
        
        k.onUpdate(() => {
            toINDEX(input.line.left[6]);
            pageNext(input.mode["NEXT\nPAGE"]);
        });
    });
};