import formatMoney from '../lib/formatMoney';

describe('formatMoney Function', () => {
	it('works with fractional dollars', () => {
		expect(formatMoney(1)).toEqual('$0.01');
		expect(formatMoney(10)).toEqual('$0.10');
		expect(formatMoney(42)).toEqual('$0.42');
	});

	it('leaves off cents for whole dollars', () => {
		expect(formatMoney(100)).toEqual('$1');
		expect(formatMoney(4000)).toEqual('$40');
		expect(formatMoney(500000)).toEqual('$5,000');
	});
	it('works with whole and fractional', () => {
		expect(formatMoney(2441)).toEqual('$24.41');
		expect(formatMoney(233441)).toEqual('$2,334.41');
	});
});
