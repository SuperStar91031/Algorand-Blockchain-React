# Build an Algorand Web Wallet Interface Using Reach and React to Connect to My Algo Wallet and AlgoSigner
![cover](https://user-images.githubusercontent.com/23031920/142118845-f9b4ac55-7287-4379-b20f-f7c7b4cfb47d.png)

This tutorial is a simple step by step guide on how to use the Reach frontend to connect to an Algorand wallet and sign transactions using MyAlgoWallet and Algosigner with React.

Connecting to a wallet is one important requirements most DApp developers will have to integrate in their application when creating a DApp on the Algorand Blockchain.
This tutorial will guide you in connecting your DApp to an Algorand wallet using either My Algo Wallet or AlgoSigner. The tutorial and code solution is divided into two sections. My Algo Wallet Connect with Reach and Algosigner independent of Reach.

Connecting to My Algo Wallet is part of the inbuilt integration in reach which provides a fallback to connect to the wallet. AlgoSigner is not integrated in reach and so integrating AlgoSigner in your add does not require Reach.

## My Algo Wallet Connect With Reach
- Using Reach to connect to the My Algo Wallet
- Checking of account information, like address and account balance
- Using Reach Faceut to fund account
- Transferring of fund using Reach


## AlgoSigner
- Connecting to the AlgoSigner web extension
- Transfering fund
- Creating Asset
- Optin to an Asset


# Setup Instructions
- clone the repository
- open a terminal cd to the reach-react folder
- From there run the command npm install
- once that has completed  cd src
- Run the curl https://raw.githubusercontent.com/reach-sh/reach-lang/master/reach -o reach ; chmod +x reach command to download reach into the src folder
- Run the ./reach version command to ensure it installed
- Run the REACH_CONNECTOR_MODE=ALGO ./reach devnet command to start the testnet
- Start up a new terminal and navigate to the reach-react folder
- Now run the npm start command to run the applications frontend
- Navigate to the localhost link given by the above command to view the application

# Demo

<img width="1440" alt="Screenshot 2021-11-16 at 03 28 28" src="https://user-images.githubusercontent.com/23031920/142119087-5fc396ed-594a-4fc5-9b43-618eca3aef5a.png">

Here is a [demo link](https://reachwallet.netlify.app) to the deployed Application on netlify.

# License
Distributed under the MIT License. See for more information. [LICENSE](https://github.com/gconnect/AlgorandReachReactWallet/blob/master/LICENSE)

# Blog and Video Tutorial
For more details you can checkout the blog post [here](https://developer.algorand.org/tutorials/web-wallet-algorand-reach-and-react/?from_query=reach%20react) . And here is the link to the [youtube demo](https://www.youtube.com/watch?v=7fIDHOjlUvw)

# Disclaimer

This project is not audited and should not be used in a production environment.





