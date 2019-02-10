describe('sample test 101', () => {
	it('works as expected', () => {
		var age = 100;
		expect(age).toEqual(100);
		expect(1).toEqual(1);
	});
	it('handles ranges just fine', () => {
		const age = 200;
		expect(age).toBeGreaterThan(100);
	});
	it('makes a list of dog names', () => {
		const dogs = ['snickers', 'luna'];
		expect(dogs).toEqual(dogs);
		expect(dogs).toContain('snickers');
	});
});
