import FMS from "../functions/fms";
import { setTitle, setPage, setLineText, displayContents } from "../functions/displayEngine";

export default function identScene(k) {
    k.scene("ident", () => {
        FMS(k);
        setTitle("IDENT");
        setPage(1,10)
    });
};