import constants from 'constants/constants';

const bankActionCreators = {
  depositIntoAccount(amount) {
    return { type: constants.DEPOSIT_INTO_ACCOUNT, amount };
  },
  withdrawFromAccount(amount) {
    return { type: constants.WITHDRAW_FROM_ACCOUNT, amount };
  },
};

export default bankActionCreators;