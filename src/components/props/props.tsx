import classNames from 'classnames';
import styles from './props.module.scss';


export interface PropsProps {
    className?: string;
    num: number;
    str: string;
    obj: {
        name: string;
        age: number;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Props = ({ className, num, obj, str }: PropsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            Props: <div>{num}</div> <div>{str}</div>{' '}
            <div>
                <span>
                    <label>MY name is: </label>
                    {obj.name}
                </span>
                <div>I am {obj.age} yo</div>
            </div>
        </div>
    );
};
