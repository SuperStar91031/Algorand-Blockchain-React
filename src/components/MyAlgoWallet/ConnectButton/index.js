import { Button } from "../../Button.styles";

const ConnectButton = ({connectWallet}) => {
    return(
        <Button onClick ={connectWallet}>
           Connect Myalgo Wallet
        </Button>
    )
}

export default ConnectButton