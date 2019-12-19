export default (n,s) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return s[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[Math.min(n % 10, 5)]];
}