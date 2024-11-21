import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

function Menu({
    children,
    items = [],
    placement = 'bottom-start',
    width = 400,
}) {
    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <li key={index}>
                    <MenuItem data={item} />
                </li>
            );
        });
    };

    const w = 'w-[' + width + 'px]';

    return (
        <Tippy
            delay={[100, 100]}
            placement={'left-end'}
            interactive={true}
            render={(attrs) => (
                <ul className={clsx(w)} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{renderItems()}</PopperWrapper>
                </ul>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
