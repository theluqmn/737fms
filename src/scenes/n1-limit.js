import FMS from "../functions/fms";
import { setTitle, setPage, setLineText, clearLines, scratchpadInsert } from "../functions/displayEngine";
import { input, handleInput, lineSelectKeyTimeout } from "../functions/inputEngine";

export default function n1LimitScene(k) {
    k.scene("n1-limit", () => {
        FMS(k);
        clearLines();

        setTitle("N1 LIMIT");
        setPage(1,1)

        setLineText("left", 1, " SEL/OAT", "---- / +14°C")
        setLineText("left", 2, " 26K", "<TO   <ACT>")
        setLineText("left", 3, " 24K DERATE", "<TO-1")
        setLineText("left", 4, " 22K DERATE", "<TO-2")
        setLineText("left", 5, " 27K BUMP", "<TO-B")

        setLineText("right", 1, " 26K N1", "98.8/ 98.8")
        setLineText("right", 2, "", "<SEL>   CLB>")
        setLineText("right", 3, "", "CLB-1>")
        setLineText("right", 4, "", "CLB-2>")

        setLineText("left", 6, "-----------------", "<PERF INIT")
        const toPERF = handleInput(() => {
            k.go("perf-init")
            lineSelectKeyTimeout("left", 6)
        })

        setLineText("right", 6, "-----------------", "TAKEOFF>")

        k.onUpdate(() => {
            toPERF(input.line.left[6])
        })
    });
};