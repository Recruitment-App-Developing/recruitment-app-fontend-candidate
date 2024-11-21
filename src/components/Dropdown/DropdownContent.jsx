import Tippy from '@tippyjs/react/headless';

function DropdownContent({ data, children }) {
    const content = () => {
        <div className="flex-center"></div>;
    };

    return (
        <Tippy visible placement="auto-end" render={(attrs) => {}}>
            {children}
        </Tippy>
    );
}

export default DropdownContent;
