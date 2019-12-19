export default (p, i, mc, rate) => {
    const sum = p - i;
    const mr = parseFloat((rate / 100).toFixed(3)) / mc;
    const a = mr * ( Math.pow((1 + mr),mc)),
        b = Math.pow((1 + mr), mc) - 1;
    return Math.round(sum * (a / b));
}