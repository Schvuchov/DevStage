

import { ComponentProps } from "react";

//interface InputProps extends ComponentProps<'input'> {
//    error?: boolean
//}

//export function Input({ error = false, ...props }: InputProps) {
//    return (
//        <div 
//            data-error={error}
//            className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
//        >
//            <span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger">
//                <Mail />
//            </span>
//            <input className="flex-1 outline-0 bg-transparent placeholder-gray-400" {...props} />
//        </div>
//    )
//}

//group-[&:not(:has(input:placeholder-shown))] esse grupo(div) não contem dentro dele um input com palceholder-shown 
// isso para mudar a cor quando o input estiver preenchido (não estiver mostrando o placeholder 'textinho 'digite...')

interface InputRootProps extends ComponentProps<'div'>{
    error?:boolean
}

export function InputRoot({ error = false, ...props}: InputRootProps){
    return(
        <div
            data-error={error}
            className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
            {...props}
        />
    )
}

interface InputIconProps extends ComponentProps<'span'>{}

export function InputIcon(props: InputIconProps){
    return(
        <span 
            className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
            {...props}
        />
    )
}

interface InputFieldProps extends ComponentProps<'input'>{}

export function InputField(props: InputFieldProps){
    return(
        <input 
            className="flex-1 outline-0 bg-transparent placeholder-gray-400" 
            {...props} 
        />
    )
}