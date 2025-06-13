import { formatCurrency } from '../../scripts/utils/money.js'


describe('test suite: formatCurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with Zero', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('Rounds to nearest cent', () => {
        expect(formatCurrency(2053.3)).toEqual('20.53');
    });
});