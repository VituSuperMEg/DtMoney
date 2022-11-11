
import logoImg from '../../assets/logo.svg'
import Modal from 'react-modal'
import { Container, Content } from './style'

interface HeaderProps {
    onOpneNewTransactionModal : () => void;
}
export function Header({onOpneNewTransactionModal}: HeaderProps){

    return (
        <Container>
            <Content>
               <img src={logoImg} alt="logo" />

                <button type="button" onClick={onOpneNewTransactionModal}>
                Nova transaçao
                </button>
                
            </Content> 
        </Container>
    )
}