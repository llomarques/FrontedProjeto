import styles from './styles.module.css';
import type { ButtonHTMLAttributes } from 'react';
//Estendemos os atributos padrões do HTML para o nosso botão
interface BotaoPadraoProps extends
ButtonHTMLAttributes<HTMLButtonElement>{
//children já é coberto pelo ButtonHTMLAttributes
//Representará o texto dentro do botão(ex.: "inserir curso")
}
export function BotaoPadrao({className, children,...rest}
:BotaoPadraoProps) {
return(
<button
className={ `${styles.botao} ${className || ''}` }
>{children}</button>
    );
}