import FMS from "../functions/fms";
import { setTitle, setPage, setLineText, clearLines, scratchpadInsert, scratchpadCopy } from "../functions/displayEngine";
import { input, handleInput, inputTimeout, lineSelectKeyTimeout } from "../functions/inputEngine";

export function posInit1Scene(k) {
    k.scene("pos-init-1", () => {
        FMS(k);
        clearLines();

        setTitle("POS INIT");
        setPage(1,3);

        setLineText("left", 1, " GW/CRZ CG", "---.-/ 5.0");
        setLineText("left", 2, " REF AIRPORT", "----");
        setLineText("left", 3, " GATE", "-----");
        setLineText("left", 5, " GMT-MON/DY", "---");
        
        setLineText("right", 1, "LAST POS", "N47°15.6 E011°20.5");
        setLineText("right", 4, "SET IRS POS", "▯▯▯°▯▯.▯ ▯▯▯▯°▯▯.▯");
        
        setLineText("left", 6, "-----------------", "<INDEX")
        const toINDEX = handleInput(() => {
            k.go("index");
            lineSelectKeyTimeout("left", 6);
        });

        setLineText("right", 6, "-----------------", "ROUTE>")
        const toROUTE = handleInput(() => {
            k.go("route-1");
            lineSelectKeyTimeout("right", 6);
        });

        const pageNext = handleInput(() => {
            k.go("pos-init-2");
            inputTimeout("mode", "NEXT\nPAGE");
        });

        k.onUpdate(() => {
            toINDEX(input.line.left[6]);
            toROUTE(input.line.right[6]);
            pageNext(input.mode["NEXT\nPAGE"]);
        });
    });
};

export function posInit2Scene(k) {
    k.scene("pos-init-2", () => {
        FMS(k);
        clearLines();

        setTitle("POS REF");
        setPage(2,3);

        setLineText("left", 1, " FMC POS", "");
        setLineText("left", 2, " IRS L", "");
        setLineText("left", 3, " IRS R", "");

        setLineText("left", 4, " GPS L", "MEMES")
        const copyGPS = handleInput(() => {
            scratchpadCopy("left", 4)
        });

        setLineText("left", 5, " GPS R", "");
        setLineText("left", 6, " RADIO", "");
        
        setLineText("right", 1, "GS", "");
        
        // Handles changing of pages
        const pagePrev = handleInput(() => {
            k.go("pos-init-1");
            inputTimeout("mode", "PREV\nPAGE");
        });

        const pageNext = handleInput(() => {
            k.go("pos-init-3");
            inputTimeout("mode", "NEXT\nPAGE");
        });

        k.onUpdate(() => {
            copyGPS(input.line.left[4])

            pagePrev(input.mode["PREV\nPAGE"])
            pageNext(input.mode["NEXT\nPAGE"])
        });
    });
};