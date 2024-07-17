import { createBoard } from '@wixc3/react-board';
import { ElemTree } from '../../../components/elem-tree/elem-tree';
import styles from './elem-tree.board.module.scss';

export default createBoard({
    name: 'ElemTree',
    Board: () => <ElemTree className={styles.jhuj} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
