import { createBoard } from '@wixc3/react-board';
import { Props } from '../../../components/props/props';

const mynumber: number = 5;
const obj: {
    name: string;
    age: number;
} = {
    name: 'noam',
    age: mynumber,
};

export default createBoard({
    name: 'Props',
    Board: () => <Props num={16} str={'stringggggg'} obj={obj} />,
    isSnippet: true,
});
