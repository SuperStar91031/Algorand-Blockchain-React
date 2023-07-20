/*global AlgoSigner*/

import React from 'react'
import Header from './components/Header/header'
import MyAlgoWallet from './components/MyAlgoWallet/MyAlgoWallet'
import AlgoSigner from './components/AlgoSigner/AlgoSigner'
import { Main, MainBody } from './Main.styles' 
import './assets/css/app.css'

function App(){ 
        return(
         
            <MainBody>
                <Header/> 
                <Main>
                    <MyAlgoWallet/>
                    <AlgoSigner/>         
                </Main>
            </MainBody>
        )
}

export default App
