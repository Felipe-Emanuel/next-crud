interface ButtonActionProps{
    children: any
    className?: string
    color?: 'green' | 'red' | 'gray'
    onClick?: (e: any) => void
}

export function ButtonAction({className, children, color, onClick}: ButtonActionProps) {
    const defaultColor = color ?? 'gray'

    return (
        <button
            onClick={onClick}
            className={`
                flex justify-center items-center rounded-full hover:bg-purple-50
                p-2 m-1 text-${defaultColor}-600 
                ${className} 
            `}
        >
            {children}
        </button>
    )
}