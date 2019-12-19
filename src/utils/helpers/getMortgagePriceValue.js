export default (p, mc, rate) => {
    const mr = parseFloat((rate / 100).toFixed(3)) / mc;
    const a = mr * ( Math.pow((1 + mr),mc)),
        b = Math.pow((1 + mr), mc) - 1;
    return Math.round((p / (a / b)) / (1 - 0.1));
}