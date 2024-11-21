import { Fragment } from 'react';
import clsx from 'clsx';

import styles from './JobQuickViewBox.module.scss';

function BoxBodyItem({ title, text, className }) {
    return (
        <div className={className}>
            <h3 className={clsx(styles['body-title'])}>{title}</h3>
            <div
                className="h-full grow text-wrap break-words pl-3 text-justify text-sm font-normal
                    leading-[28px] tracking-[0.04em]"
                dangerouslySetInnerHTML={{ __html: text }}
            ></div>
        </div>
    );
}

export default BoxBodyItem;
