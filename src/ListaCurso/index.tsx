import styles from './styles.module.css'
import { Container } from '../componentes/Container';
import {InputPadrao} from '../componentes/InputPadrao'
import{useState, useEffect} from 'react';
import{Pencil, X} from 'lucide-react';

interface Curso{
    id: string;
    nome: string;
    periodo: string;
}

interface ListaCursosProps{
    cursos: Curso[];
    aoEditar: (curso:Curso) => void;
    aoExcluir: (id:string) => void;
}

export function ListaCursos({cursos, aoEditar, aoExcluir}:ListaCursosProps){
    return(
        <>
        <Container>
        <section className={styles.listaContainer}>
            <h2>Lista de Cursos</h2>
            <div className={styles.buscaContainer}>
                <InputPadrao placeholder="Buscar por Nome "/>
            </div>
            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th>Nome do Curso</th>
                        <th>Período</th>
                        <th>Ações</th>
                    </tr>   
                </thead>
                <tbody>
                    {cursos.map((curso)=>(
                        <tr key={curso.id}>
                            <td>{curso.nome}</td>
                            <td>{curso.periodo}</td>
                            <td>
                                <button className={styles.actionButton} 
                                title='Editar'
                                onClick={()=>aoEditar(curso)}>
                                    <span>
                                        <Pencil size={18}/>
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
        </Container>
        </>

    );
}