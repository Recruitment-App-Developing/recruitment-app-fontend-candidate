import { cn } from '~/lib/utils';

function InputTextIcon({
    inputId,
    leftIcon,
    className,
    classIcon,
    classInput,
    value,
    onChange,
    type = 'text',
    placeholder = '',
}) {
    return (
        <div className={cn('flex-center relative h-10 bg-none', className)}>
            <input
                {...(inputId && { id: inputId })}
                className={cn(
                    `hover:outline-green bg-bodyBg hover:shadow-outline-green focus:border-success
                    focus:shadow-outline-green absolute w-full rounded-lg border-[1px] border-solid
                    border-transparent px-1 py-1 pl-10 leading-[30px] text-black outline-none
                    transition duration-500 ease-linear placeholder:text-gray-400 hover:bg-white
                    hover:outline-none focus:bg-white`,
                    classInput,
                )}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
            {leftIcon && (
                <span
                    className={cn(
                        'flex-center absolute left-2 text-base',
                        classIcon,
                    )}
                >
                    {leftIcon}
                </span>
            )}
        </div>
    );
}

export default InputTextIcon;
