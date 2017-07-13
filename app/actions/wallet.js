export function walletImport(wif){
  return {
    type: types.WALLET_IMPORT,
    wif: wif
  }
};

export function setBalance(ans, anc){
  return {
    type: types.SET_BALANCE,
    ANS: ans,
    ANC: anc
  }
}
