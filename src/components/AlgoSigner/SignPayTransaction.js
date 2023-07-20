/*global AlgoSigner*/
import React,{useState, useRef} from "react";
import { FormStyle } from "../Form.style";
import { TransactionButton } from "../Button.styles";
import { BodyText } from "../MyAlgoWallet/MyAlgoWallet.styles";
import { TOKEN, ALGOD_SERVER, PORT } from "../../constants";
const algosdk = require("algosdk");

const SignPayTransaction = ({userAccount, amount, receipient}) => {
    const [isLoading, setLoading] = useState(false)
    
    const MICROALGOS_TO_ALGOS_RATIO = 1e6;
    const INVALID_MICROALGOS_ERROR_MSG =
    'Microalgos should be positive and less than 2^53 - 1.';

    /**
     * microalgosToAlgos converts microalgos to algos
     * @param microalgos - number
     * @returns number
     */
    const  microalgosToAlgos = (microalgos ) => {
    if (microalgos < 0 || !Number.isSafeInteger(microalgos)) {
        throw new Error(INVALID_MICROALGOS_ERROR_MSG);
    }
    return microalgos / MICROALGOS_TO_ALGOS_RATIO;
    }

    /**
     * algosToMicroalgos converts algos to microalgos
     * @param algos - number
     * @returns number
     */
    const algosToMicroalgos = (algos) => {
    const microalgos = algos * MICROALGOS_TO_ALGOS_RATIO;
    return Math.round(microalgos);
    }

    const signPayTransaction = async () =>{
        // await AlgoSigner.connect();
        setLoading(true)
        let client = new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT)
        
        //Query Algod to get testnet suggested params
        let suggestedParams = await client.getTransactionParams().do()

        try{
            const txn = await new algosdk.makePaymentTxnWithSuggestedParamsFromObject({
                from:  userAccount.current[0].address,
                to: receipient.current,
                // amount:parseInt(amount.current),
                amount : algosToMicroalgos(parseInt(amount.current)),
                // note: "document.getElementById('note').value",
                suggestedParams: {...suggestedParams}
              });
              
            // Use the AlgoSigner encoding library to make the transactions base64
              let txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
              
            let signedTxs = await AlgoSigner.signTxn([{txn: txn_b64}])

            // Get the base64 encoded signed transaction and convert it to binary
            let binarySignedTx = AlgoSigner.encoding.base64ToMsgpack(signedTxs[0].blob);

            // Send the transaction through the SDK client
            let id = await client.sendRawTransaction(binarySignedTx).do();
                console.log(id)
                setLoading(false)
        }catch(err){
            console.log(err)
            setLoading(false)
        }  
    }




    return(
    <div>
        <div>
            <BodyText>Make Payment</BodyText>
            <FormStyle onChange = {(e) => amount.current = e.target.value} placeholder="Amount" /><br/>
            <FormStyle onChange = {(e) => receipient.current = e.target.value} placeholder="Receiver address" /><br/>
            <TransactionButton backgroundColor onClick ={signPayTransaction}>{isLoading ? "loading...": "Sign Transaction"}</TransactionButton>
        </div>
    </div>
    )
}

export default SignPayTransaction