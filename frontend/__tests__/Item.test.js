import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';

const fakeItem = {
	id: 'ABC123',
	title: 'An Item',
	price: 4000,
	description: 'Item description',
	image: 'item.jpg',
	largeImage: 'largeItem.jpg',
};

describe('<Item/>', () => {
	it('renders the image properly', () => {
		const wrapper = shallow(<ItemComponent item={fakeItem} />);
		const img = wrapper.find('img');
		console.log(wrapper.debug());
		expect(img.props().src).toBe(fakeItem.image);
		expect(img.props().alt).toBe(fakeItem.title);
	});
	it('renders the title properly', () => {
		const wrapper = shallow(<ItemComponent item={fakeItem} />);
		const Price = wrapper.find('.buttonList > div');

		expect(Price.children().text()).toBe('$40');

		expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
	});
	it('renders out the buttons properly', () => {
		const wrapper = shallow(<ItemComponent item={fakeItem} />);
		const buttonList = wrapper.find('.buttonList');
		expect(buttonList.children()).toHaveLength(2);
		expect(buttonList.find('AddToCart').exists()).toBe(true);
	});
});
