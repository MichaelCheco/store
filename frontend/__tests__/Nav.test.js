import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import Header from '../components/Header';
import { CURRENT_USER_QUERY } from '../components/User';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeUser, fakeCartItem } from '../lib/testUtils';

const notSignedInMocks = [
	{
		request: { query: CURRENT_USER_QUERY },
		result: { data: { me: null } },
	},
];
const signedInMocks = [
	{
		request: { query: CURRENT_USER_QUERY },
		result: { data: { me: fakeUser() } },
	},
];
const signedInMocksWithCartItems = [
	{
		request: { query: CURRENT_USER_QUERY },
		result: {
			data: {
				me: {
					...fakeUser(),
					cart: [fakeCartItem()],
				},
			},
		},
	},
];
describe('<Header/>', () => {
	it('renders a minimal nav when no user is signed in', async () => {
		const wrapper = mount(
			<MockedProvider mocks={notSignedInMocks}>
				<Header />
			</MockedProvider>
		);
		await wait();
		wrapper.update();

		const nav = wrapper.find('ul[data-test="nav"]');
		expect(toJSON(nav)).toMatchSnapshot();
	});

	xit('renders full nav when a user is signed in', async () => {
		const wrapper = mount(
			<MockedProvider mocks={signedInMocks}>
				<Header />
			</MockedProvider>
		);
		await wait();
		wrapper.update();
		const nav = wrapper.find('ul[data-test="nav"]');
		expect(nav.children().length()).toBe(5);
		// expect(toJSON(nav)).toMatchSnapshot();
	});

	xit('renders the amount of items in the cart', async () => {
		const wrapper = mount(
			<MockedProvider mocks={signedInMocksWithCartItems}>
				<Header />
			</MockedProvider>
		);
		await wait();
		wrapper.update();

		const nav = wrapper.find('ul[data-test="nav"]');
		const count = nav.find('div.count');
		console.log(count.debug());
		expect(toJSON(count)).toMatchSnapshot();
	});
});
