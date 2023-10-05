//Julien Byrnes 101406358

function lowerCaseWords(inputArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(inputArray)) {
            reject("Input is not an array");
            return;
        }

        const filteredAndLowercased = inputArray
            .filter((item) => typeof item === "string")
            .map((word) => word.toLowerCase());

        if (filteredAndLowercased.length === 0) {
            reject("No valid strings found in the input array");
        } else {
            resolve(filteredAndLowercased);
        }
    });
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
lowerCaseWords(mixedArray)
    .then((result) => {
        console.log("Lowercased words:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });