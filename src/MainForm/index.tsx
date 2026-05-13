/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { Container } from '../componentes/Container';
import { InputPadrao } from '../componentes/InputPadrao';
import { BotaoPadrao } from '../componentes/BotaoPadrao';

interface DadosCurso{
    nomeCurso: string;
    periodo: string;
}
interface MainFormProps{
    aoAdicionar: (curso:any) => void;
    aoAtualizar: (curso:any) => void;
    cursoEmEdicao: any|null;

}

export function MainForm({aoAdicionar, aoAtualizar, cursoEmEdicao}:MainFormProps){
        const [dadosCurso,setDadosCurso]=useState<DadosCurso>({
            nomeCurso:'',
            periodo:'',
        })
        useEffect(()=>{
            if(cursoEmEdicao){
                setDadosCurso({
                    nomeCurso: cursoEmEdicao.nome,
                     periodo: cursoEmEdicao.periodo
                });
            }else{
                setDadosCurso({nomeCurso:'', periodo:''});
            }
        },[cursoEmEdicao])

        const lidarComMudanca = (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>)=>{
             setDadosCurso({
            ...dadosCurso,
            [e.target.name]: e.target.value,

            });
        };

        const cadastrarCurso =(e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            if(cursoEmEdicao){
                const cursoAtualizado = {
                id: cursoEmEdicao.id,
                nome: dadosCurso.nomeCurso,
                periodo: dadosCurso.periodo
            };
            console.log("Alteração em formato JSON 🐒: \n",
                 JSON.stringify(cursoAtualizado, null, 2));
                 aoAtualizar(cursoAtualizado)
                
        } else{
            const cursoNovo = {
                id:"", // Deixar vazio a página home fará o autoincrement.
                nome: dadosCurso.nomeCurso,
                periodo: dadosCurso.periodo
            }; // Fim cursoNovo
           console.log("Inclusão em formato JSON 😝: \n",
            JSON.stringify(cursoNovo,null,2));
             aoAdicionar(cursoNovo);
        } // Fim else
            setDadosCurso({nomeCurso:'', periodo:''})
    }; // Fim cadastrarCurso

    return(
        <>
            <Container>
                <section className={styles.formularioContainer}>
                    <h2 className={styles.titulo}>
                        {cursoEmEdicao? 'Editar Curso': 'Cadastrar Novo Curso'}
                    </h2>
                    <form onSubmit={cadastrarCurso}>
                        <div className={styles.pularLinha}>
                        <label htmlFor="nomeCurso" className={styles.label}>
                            Nome do Curso
                        </label>
                        <InputPadrao
                        type="text"
                        id = "nomeCurso"
                        name = "nomeCurso"
                        placeholder="Ex: Desenvolvimento de Sistemas"
                        value={dadosCurso.nomeCurso}
                        onChange={lidarComMudanca}
                        required
                        />
                        </div>
                        <div className={styles.pularLinha}>
                        <label htmlFor="periodo" className={styles.label}>
                            Período
                        </label>
                        <select className={styles.estiloSelect}
                        id="periodo"
                        name="periodo"
                        value={dadosCurso.periodo}
                        onChange={lidarComMudanca}
                        required
                        >
                            <option value="">Selecione o período</option>
                            <option value="matutino">Matutino</option>
                            <option value="vespertino">Vespertino</option>
                            <option value="noturno">Noturno</option>
                            <option value="integral">Integral Sesi?Senai</option>
                        </select>
                        </div>
                        <div className={styles.alinharBotao}>
                        <BotaoPadrao type="submit">
                            {cursoEmEdicao? 'Salvar Alterações': 'Inserir Curso'}
                        </BotaoPadrao>
                       


                        </div>

                    </form>
                    </section>
            </Container>
        </>
    );
}