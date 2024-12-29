import FMS from "../functions/fms";
import { setTitle, setPage, setLineText, clearLines} from "../functions/displayEngine";
import { input, handleInput } from "../functions/inputEngine";

export default function identScene(k) {
    k.scene("ident", () => {
        FMS(k);
        clearLines();

        setTitle("IDENT");
        setPage(0,0)

        k.add([
            k.text(`
IDENT

Shows details about the aircraft. This is the default page
that is shown after the FMS is initialized.

-
BASIC GUIDE

The display has 12 lines of text - 6 headings and 6 texts.
Heading lines are smaller and are located at the top of
each text. Texts sit right next to its corresponding
Line Select Key (LSK).

On lines with an arrow (</>), pressing its LSK will
change the page to the page specified by the line. For
quick access, you can use the 15 mode keys which is located
below the display.

The bottom part the display is reserved for the scratchpad.
Try typing using the keyboard on the FMS - the text will be
stored in the scratchpad. In pages where you are required to
enter data, simply type the data in the scratchpad and press
the corresponding LKS to enter the data. On lines with LSKs
that does not have a function, or lines that is output-only,
the text can be copied to the scratchpad by pressing its LSK.
Use the SP key to add spaces, DEL key to delete characters,
and CLR to clear the scratchpad.
                `, {
                    font: "Arial",
                    size: 18,
                }),
            k.pos(600, 100)
        ])

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
            k.go("pos-init-1")
        })

        k.onUpdate(() => {
            toINDEX(input.line.left[6])
            toPOSINIT(input.line.right[6])
        })
    });
};