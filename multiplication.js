function multiplicationTable(size, toSize) {
    let jToString = "";
    RegExpObject = /^\d+$/;
    if ((typeof size !== "number") || (typeof toSize !== "number")) {
        if (typeof size === "undefined") {
            size = toSize;
        }
        if (typeof toSize === "undefined") {
            toSize = size;
        }
        if ((typeof size == "string") || (typeof toSize !== "string")) {
            if (RegExpObject.test(size)) {
                Number(size);
            } else console.log("GFY");
            if (RegExpObject.test(toSize)) {
                Number(toSize);
            } else console.log("GFY");
        }
        for (let i = 1; i <= toSize; i++) {
            for (j = 1; j <= size; j++) {
                jToString += (i * j) + "\t";
                if (j % size === 0) {
                    jToString += ("\n");
                }
            }
        }
        console.log(jToString);

    }
}
multiplicationTable(7);
multiplicationTable(7, 5); //OK
multiplicationTable(7, "5"); //OK
multiplicationTable(7, "5a"); //GFY
multiplicationTable("5", 7); //OK
multiplicationTable("5a", 6); //GFY