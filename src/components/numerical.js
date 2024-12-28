import { numericalKeys } from "./keys";

export function initNumerical(k) {
    numericalKeys(k, 115, 686, "1");
    numericalKeys(k, 160, 686, "2");
    numericalKeys(k, 205, 686, "3");
    // row 2
    numericalKeys(k, 115, 734, "4");
    numericalKeys(k, 160, 734, "5");
    numericalKeys(k, 205, 734, "6");
    // row 3
    numericalKeys(k, 115, 782, "7");
    numericalKeys(k, 160, 782, "8");
    numericalKeys(k, 205, 782, "9");
    // row 4
    numericalKeys(k, 115, 830, ".");
    numericalKeys(k, 160, 830, "0");
    numericalKeys(k, 205, 830, "+/=");
}