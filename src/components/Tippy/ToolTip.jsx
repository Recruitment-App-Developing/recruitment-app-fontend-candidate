import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-extreme.css';

function ToolTip({ children, content, placement = 'top' }) {
    return (
        <Tippy
            placement={placement}
            content={content}
            animation="scale-extreme"
        >
            {children}
        </Tippy>
    );
}

export default ToolTip;
