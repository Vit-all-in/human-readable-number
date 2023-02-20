module.exports = function toReadable (number) {
    let a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let d = [Math.trunc(number / 100), Math.trunc(number % 100 / 10), number % 10];
    let result = "";

    if (d[0]) result += `${a[d[0] - 1] + " hundred "}`;
    if (d[1] > 1) result += c[d[1] - 2] + " ";
    if (d[1] === 1) result += b[d[2]];
    if (d[1] !== 1 && d[2]) result += a[d[2] - 1];
    if (result[result.length - 1] == " ") result = result.slice(0, -1);
    if (result === "") result += "zero";

    return result;
}
