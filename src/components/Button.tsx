"use client"

import { IconType } from "react-icons";

interface ButtonProps{
    label: string,
    disabled?: boolean,
    outline?: boolean,
    small?: boolean,
    custom?: string,
    icon?: IconType,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({label, disabled, outline, small, custom, icon: Icon, onClick}) => {
    return(
        <button onClick={onClick} disabled={disabled} className={`gap-[1.5rem] flex flex-wrap mt-4 justify-center flex-grow bg-gradient-to-br from-#ffc2cc to-#add8e6 dark:bg-[linear-gradient(144deg,#AF40FF,#5B42F3_50%,#00DDEB)] shadow-[rgba(151,65,252,0.2)_0_15px_30px_-5px] box-border text-white items-center text-xl w-[90%] min-w-[140px] no-underline select-none touch-manipulation whitespace-nowrap cursor-pointer p-[3px] rounded-lg border-0`}>
            <a className='bg-gray-100 border-sky-100 border-4 flex justify-center text-black hover:text-white w-full h-full transition-[300ms] px-6 py-4 rounded-md hover:bg-transparent'>
            {Icon && <Icon size={24} />}
            {label}
            </a>
        </button>
    )
}

export default Button;

//<button className="gap-[1.5rem] flex flex-wrap mt-4 justify-center flex-grow bg-gradient-to-br from-#ffc2cc to-#add8e6 dark:bg-[linear-gradient(144deg,#AF40FF,#5B42F3_50%,#00DDEB)] shadow-[rgba(151,65,252,0.2)_0_15px_30px_-5px] box-border text-white items-center text-xl w-[90%] min-w-[140px] no-underline select-none touch-manipulation whitespace-nowrap cursor-pointer p-[3px] rounded-lg border-0"><a href={`/product/${product.id}`} className='bg-gray-100 text-black hover:text-white w-full h-full transition-[300ms] px-6 py-4 rounded-md hover:bg-transparent'>Ver Produto</a></button>