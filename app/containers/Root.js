import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wallet from '../components/Wallet';
import * as WalletActions from '../actions/wallet';

function mapStateToProps(state) {
  return {
    loggedIn: state.account.loggedIn,
    wif: state.account.wif,
    ans: state.wallet.ANS,
    anc: state.wallet.ANC
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(WalletActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
