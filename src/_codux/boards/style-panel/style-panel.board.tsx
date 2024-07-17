import { createBoard } from '@wixc3/react-board';
import { StylePanel } from '../../../components/style-panel/style-panel';

export default createBoard({
    name: 'StylePanel',
    Board: () => <StylePanel />,
    isSnippet: true,
});
