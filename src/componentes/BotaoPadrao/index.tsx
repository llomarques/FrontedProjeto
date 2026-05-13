import styles from './styles.module.css';
import type { ButtonHTMLAttributes } from 'react';
//Estendemos os atributos padrões do HTML para o nosso botão
export function BotaoPadrao({ className, children, ...rest }
    : ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`${styles.botao} ${className || ''}`}
            {...rest}
        >{children}</button>
    );
}