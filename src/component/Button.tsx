// function Button({text}:{text:string}){
//     return (
//         <button>{text}</button>
//     )
// }

import { useRef } from "react";
import styles from "./Button.module.css"

export interface ButtonProps {
    text: string;
    value?: number;
    onClick?(): any; // setValue
}

const Button = (buttonProps: ButtonProps) => {
    const refContainer = useRef<HTMLInputElement>(null);
    return (
        <div>
            <input ref={refContainer} type='text'/>
            <button
                className={styles.btn}
                onClick={()=> refContainer.current?.focus()}
                // onClick={buttonProps.onClick}
            >
                {buttonProps.text}
            </button>
        </div>
    ) 
}

export default Button;