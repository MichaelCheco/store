import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import CartCount from '../components/CartCount';

describe('<CartCount/>', () => {
	it('renders', () => {
		shallow(<CartCount count={5} />);
	});
	it('matches the snapshot', () => {
		const wrapper = shallow(<CartCount count={6} />);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});
	it('updates via props', () => {
		const wrapper = shallow(<CartCount count={46} />);
		expect(toJSON(wrapper)).toMatchSnapshot();
		wrapper.setProps({ count: 10 });
		expect(toJSON(wrapper)).toMatchSnapshot();
	});
});
