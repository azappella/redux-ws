import React from 'react';
import store from 'stores/store';
import actions from 'actions/actions';
import { connect } from 'react-redux';


class BankApp extends React.Component {

  handleWithdraw(e) {
    this.props.onWithdraw(e, this.refs.amount.value);
    this.refs.amount.value = '';
  }

  handleDeposit(e) {
    this.props.onDeposit(e, this.refs.amount.value);
    this.refs.amount.value = '';
  }

  render() {
    return (
      <div>
        <h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
        <div className="atm">
          <input type="text" placeholder="Enter Ammount" ref="amount" />
          <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
          <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
        </div>
      </div>
    );
  }
};

BankApp.propTypes = {
  balance: React.PropTypes.number,
  onDeposit: React.PropTypes.func,
  onWithdraw: React.PropTypes.func
};

const mapStateToProps = (state) => {
  return { 
    balance: state.bank.balance,
    wsStatus: state.ws.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeposit: (e, amount) => store.dispatch( actions.ws.emit('deposit', amount) ),
    onWithdraw: (e, amount) =>  store.dispatch( actions.ws.emit('withdraw', amount) ),
  };
};

const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(BankApp);

export default BankAppContainer;