import classNames from 'classnames';
import styles from './elem-tree.module.scss';
import { ReactComponent as ReactSvg } from '../../assets/react.svg';
import BasketballPng from '../../assets/basketball.png';
import { useState } from 'react';

export interface ElemTreeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ElemTree = ({ className }: ElemTreeProps) => {
    const [st, setSt] = useState(0)
    return (
        <div className={classNames(styles.root, className)}>
            <header>
                <h1>Heading 1</h1>
                <h5>h5555</h5>
            </header>
            <audio
                controls={true}
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/audio-placeholder.mp3"
            />
            <ul>
                <li>Milk</li>
                <li>Tea</li>
                <li>Coffee</li>
            </ul>
            <div>
                <button onClick={(() => setSt(prev=>prev+1))}>{st}</button>
                <select>
                    <option>Apple</option>
                    <option>Banana</option>
                    <option>Watermelon</option>
                </select>
            </div>
            <>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    width="75"
                />
                <label>Label</label>
                <span>text</span>ElemTree
            </>
            <div className={styles.grid}>
                <h2>Replace content</h2>
                <ReactSvg />
                <img src={BasketballPng} alt="" width="75" />
                <video
                    controls={true}
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"
                    className={styles.video1}
                />
            </div>
        </div>
    );
};
