const calculateTime = require('../medium/times')
global.Date = global.Date || function () { return this; };
global.Date.prototype.now = function () { return new Date('2000-01-01T00:00:00Z').getTime(); };

describe('calculateTime', () => {
    beforeEach(() => {
        delete global.Date.prototype.now;
    });

    it('calculates the time correctly for small values', () => {
        expect(calculateTime(100)).toBeLessThan(10);
    });

    it('calculates the time correctly for medium values', () => {
        expect(calculateTime(100000)).toBeLessThan(100);
    });

    it('calculates the time correctly for large values', () => {
        expect(calculateTime(1000000000)).toBeLessThan(1000);
    });
});
