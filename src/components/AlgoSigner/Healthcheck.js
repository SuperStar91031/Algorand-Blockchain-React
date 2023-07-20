import React from "react";

const HealthCheck = ({algodClient}) =>{

    const healthCheck = async () => {
        try{
         const resp =  await algodClient.healthCheck()
            console.log(resp)
        }catch(err){
            console.log(err)
        }
    }
    return(
    <div>
        <button onClick={healthCheck}>HealthCheck</button>
    </div>
    )
}

export default HealthCheck