import { cn } from '~/lib/utils';

const ButtonStyles = {
    green: 'small-semibold h-10 text-white bg-success rounded-md px-4 py-2 gap-[6px] hover:bg-[#009643]',
    outline:
        'small-semibold h-10 rounded-md border-[1px] border-solid border-[#99e0b9] bg-white px-4 py-2 gap-[6px] text-success hover:border-success',
};

const classBase =
    'inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none';

function Button({
    variant = 'green',
    type = 'button',
    children,
    leftIcon,
    rightIcon,
    className,
    classText = 'md-text-ellipses',
    classLeftIcon,
    classRightIcon,
    ...props
}) {
    return (
        <button
            type={type}
            className={cn(classBase, ButtonStyles[variant], className)}
            // className="small-semibold h-10 overflow-hidden rounded-md border-[1px] border-solid
            //     border-[#99e0b9] bg-white px-4 py-2 text-success hover:border-success"
            {...props}
        >
            {leftIcon && (
                <div className={cn('flex-center text-[15px]', classLeftIcon)}>
                    {leftIcon}
                </div>
            )}
            <span className={cn(classText)}>{children}</span>
            {rightIcon && (
                <div className={cn('flex-center text-[15px]', classRightIcon)}>
                    {rightIcon}
                </div>
            )}
        </button>
    );
}

export default Button;

const className =
    'small-semibold bg-white border-[1px] border-solid border-[#99e0b9] container text-nowrap';
