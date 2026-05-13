import { Container } from "../../componentes/Container";
// import { BotaoPadrao } from "../../componentes/BotaoPadrao";
import { MainForm } from "../../MainForm";

export function Home() {
    return (
        <>
            <MainForm>
                <Container>
                    <h1>Bem-vindo à página Home!</h1>
                </Container>
            </MainForm>
        </>
    )
}