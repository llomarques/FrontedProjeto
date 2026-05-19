import styles from './styles.module.css';
import { Container } from '../componentes/Container';
import { InputPadrao } from '../componentes/InputPadrao';
import { BotaoPadrao } from '../componentes/BotaoPadrao';
import { useEffect } from 'react';
import { useState } from 'react';

interface DadosCurso {
    nomecurso : string;
    periodo : string;
}

interface MainFormProps{
    aoAdicionar: (curso:any) => void;
    aoAtualizar: (curso:any) => void;
    cursoEmEdicao: (any | null);
}
export function MainForm({aoAdicionar, aoAtualizar, cursoEmEdicao}:MainFormProps) {
    const [dadosCurso, setDadosCurso] = useState<DadosCurso>({
        nomecurso: '',
        periodo: ''
    });
    useEffect(() => {
        if (cursoEmEdicao) {
            setDadosCurso({
                nomecurso: cursoEmEdicao.nome,
                periodo: cursoEmEdicao.periodo
            });
        } else {
            setDadosCurso({
                nomecurso: '',
                periodo: ''
            });
        }
    }, [cursoEmEdicao]);
    const lidarComMudanca = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setDadosCurso({
            ...dadosCurso,
            [e.target.name]: e.target.value
        });
    };
    const cadastrarCurso =  (e: any) => {
        e.preventDefault();
        if (cursoEmEdicao) {
            const cursoAtualizado = {
                id: cursoEmEdicao.id,
                nome: dadosCurso.nomecurso,
                periodo: dadosCurso.periodo
            }
            console.log("Alteração em formato json\n", JSON.stringify(cursoAtualizado, null, 2));
            aoAtualizar(cursoAtualizado);
        }else {
            const cursoNovo = {
                nome: dadosCurso.nomecurso,
                periodo: dadosCurso.periodo
            }
            console.log("Novo curso em formato json\n", JSON.stringify(cursoNovo, null, 2));
            aoAdicionar(cursoNovo);
            setDadosCurso({
                nomecurso: '',
                periodo: ''
            });
        }
    };

    return (
        <>
            <Container>
                <section className={styles.formularioContainer}>
                    <h2 className={styles.titulo}>Cadastrar curso
                        {/* //**{cursoEmEdicao ? 'Editar curso '}:{'Alterar Curso'} */}

                    </h2>
                    <form><div className={styles.pularLinha}>
                        <label htmlFor="nomeCurso" className={
                            styles.label}>Nome do curso</label>
                        <InputPadrao
                            id="nomeCurso"
                            type="text"
                            name="nomeCurso"
                            placeholder="Digite o nome do curso"
                            value={dadosCurso.nomecurso}
                            onChange={lidarComMudanca}
                            required></InputPadrao>
                    </div>
                        <div className={styles.pularLinha}>
                            <label htmlFor="periodo" className={styles.label}>
                                Período
                            </label>
                            <select
                                name="periodo"
                                id="periodo"
                                value={dadosCurso.periodo}
                                onChange={lidarComMudanca}
                                required
                                className={styles.estiloSelect}
                            >
                                <option value="">Selecione o período</option>
                                <option value="Manhã">Manhã</option>
                                <option value="Tarde">Tarde</option>
                                <option value="Noite">Noite</option>
                                <option value="Integral">Integral</option>

                            </select>
                        </div>
                        <div className={styles.alinharBotao}>
                            <BotaoPadrao type="submit">
                                botao teste
                            </BotaoPadrao>
                        </div>
                    </form>
                </section>
            </Container>
        </>
    );
}