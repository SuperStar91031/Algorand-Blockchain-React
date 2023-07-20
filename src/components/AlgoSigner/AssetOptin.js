/*global AlgoSigner*/
import React, { useRef, useState } from "react";
import { FormStyle } from "../Form.style";
import { TransactionButton } from "../Button.styles";
import { BodyText } from "../MyAlgoWallet/MyAlgoWallet.styles";
import { TOKEN, ALGOD_SERVER, PORT } from "../../constants";
const algosdk = require("algosdk");

const CreateAsset = ({userAccount}) => {
    const receiver = useRef()
    const assetIndex = useRef()
    const note = useRef()
    const [isLoading, setLoading] = useState(false)


    const optInToAnAsset = async () =>{
        setLoading(true)
        let client =   new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT)
               
        //Query Algod to get testnet suggested params
        let txParamsJS = await client.getTransactionParams().do()
       try{
           const txn = await new algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
               from: userAccount.current[0].address,
               to: receiver.current,
               assetIndex: +assetIndex.current,
               note: AlgoSigner.encoding.stringToByteArray(note.current),
               amount: 0,
               suggestedParams: {...txParamsJS}
             });
             
             // Use the AlgoSigner encoding library to make the transactions base64
             const txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
             
           const signedTxs = await AlgoSigner.signTxn([{txn: txn_b64}]) 
            console.log(signedTxs)
   
            // Get the base64 encoded signed transaction and convert it to binary
            let binarySignedTx = await AlgoSigner.encoding.base64ToMsgpack(signedTxs[0].blob);
   
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
            <BodyText>Asset Optin</BodyText>
            <FormStyle onChange = {(e) => receiver.current = e.target.value} placeholder="Receiver address" /><br/>
            <FormStyle onChange = {(e) => assetIndex.current = e.target.value} placeholder="Asset index" /><br/>
            <FormStyle onChange = {(e) => note.current = e.target.value} placeholder="Note" /><br/>
            <TransactionButton backgroundColor onClick ={optInToAnAsset}>{isLoading ? "loading...": "Sign Asset Optin"}</TransactionButton>
        </div>
    </div>
    )
}

export default CreateAsset