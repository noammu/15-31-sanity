import classNames from 'classnames';
import styles from './style-panel.module.scss';

export interface StylePanelProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const StylePanel = ({ className }: StylePanelProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <span>text</span>
            </div>
            StylePanel
            <div>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.img1}
                />
            </div>
            <div>
                <h1>Heading 1</h1>
                <p>This is a paragraph.</p>
            </div>
        </div>
    );
};
