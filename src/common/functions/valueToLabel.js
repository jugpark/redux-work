export default function valueToLabel(val, optionarray) {
    let stringval = val + ""
    if (stringval === "undefined") return;
    if (optionarray !== null)    {
        for (let i = 0; i < optionarray?.length; i++) {
            if (optionarray[i].value + "" === stringval) {
                return optionarray[i].label;
            }
        }
    }

    return stringval === "null" ? "" : stringval ;
};
