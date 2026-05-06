import { Container } from "../../componentes/Container";
import { BotaoPadrao } from "../../componentes/BotaoPadrao";

export function Home() {
    return (
        <>

            <Container>
                <h1>
                    olá da home!
                </h1>
                <BotaoPadrao>
                    Clique aqui
                </BotaoPadrao>
            </Container>
        </>
    )
}