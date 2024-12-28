import { alphabeticalKeys } from "./keys";

export function initAlphabetical(k) {
    // row 1
    alphabeticalKeys(k, 266, 590, "A");
    alphabeticalKeys(k, 319, 590, "B");
    alphabeticalKeys(k, 372, 590, "C");
    alphabeticalKeys(k, 425, 590, "D");
    alphabeticalKeys(k, 478, 590, "E");
    // row 2
    alphabeticalKeys(k, 266, 638, "F");
    alphabeticalKeys(k, 319, 638, "G");
    alphabeticalKeys(k, 372, 638, "H");
    alphabeticalKeys(k, 425, 638, "I");
    alphabeticalKeys(k, 478, 638, "J");
    // row 3
    alphabeticalKeys(k, 266, 686, "K");
    alphabeticalKeys(k, 319, 686, "L");
    alphabeticalKeys(k, 372, 686, "M");
    alphabeticalKeys(k, 425, 686, "N");
    alphabeticalKeys(k, 478, 686, "O");
    // row 4
    alphabeticalKeys(k, 266, 734, "P");
    alphabeticalKeys(k, 319, 734, "Q");
    alphabeticalKeys(k, 372, 734, "R");
    alphabeticalKeys(k, 425, 734, "S");
    alphabeticalKeys(k, 478, 734, "T");
    // row 5
    alphabeticalKeys(k, 266, 782, "U");
    alphabeticalKeys(k, 319, 782, "V");
    alphabeticalKeys(k, 372, 782, "W");
    alphabeticalKeys(k, 425, 782, "X");
    alphabeticalKeys(k, 478, 782, "Y");
    // row 6
    alphabeticalKeys(k, 266, 830, "Z");
    alphabeticalKeys(k, 319, 830, "SP");
    alphabeticalKeys(k, 372, 830, "DEL");
    alphabeticalKeys(k, 425, 830, "/");
    alphabeticalKeys(k, 478, 830, "CLR");
}