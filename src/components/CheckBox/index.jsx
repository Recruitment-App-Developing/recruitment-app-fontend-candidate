import React, { useEffect, useState } from 'react';
import styles from './CheckBox.module.scss';
import clsx from 'clsx';

function Checkbox({ id, value, callBackSuccess }) {
    const [checked, setChecked] = useState(value);

    callBackSuccess(checked);

    return (
        <div className={clsx(styles.cntr)}>
            <input
                type="checkbox"
                id={id}
                className={clsx(styles['hidden-xs-up'])}
                checked={checked}
                onChange={() => {
                    setChecked(!checked);
                }}
            />
            <label
                htmlFor={id}
                className={clsx(styles.cbx, checked && styles.cbxSelection)}
            ></label>
        </div>
    );
}

export default Checkbox;
