

const text = "asad ali soomro   a   ";
let counter = 0;
let length = text.split(" ").map((currentValue) => {
    if (currentValue === "") {
        counter = counter + 1;
    }
    return text.split(" ").length - counter;
});
console.log(Math.min.apply(null, length), "words");