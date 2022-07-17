/* eslint-disable require-jsdoc */

/* set data of the transaction to be send*/
function setTxData(wallet, contract) {
    const authorization = setAuth(wallet); // signer

    const txData = {
        actions: [
            {
                account: contract.name,
                name: contract.action,
                authorization: authorization,
                data: contract.params,
            },
        ],
    };

    return txData;
}

// @private
function setAuth(wallet) {
    const authorization = [
        {
            actor: wallet.executorAddress,
            permission: "active",
        },
    ];

    // add cosign if exists
    if (wallet.coSignAddress) {
        authorization.unshift({
            actor: wallet.coSignAddress,
            permission: "active",
        });
    }

    return authorization;
}

module.exports = { setTxData };

// function setExecutor(actions, address) {
//     /* every wax tx needs an executor inside the data parameter */
//     actions.forEach((action) => {
//         const key = Object.keys(action)[1]; // "params" key
//         const actionParamsValue = action[key]; // "params" value
//         const executorParam = Object.keys(actionParamsValue)[0]; // "executor" key
//         actionParamsValue[executorParam] = address; // change ex key
//         action.params = actionParamsValue;
//     });

//     return actions;
// }
