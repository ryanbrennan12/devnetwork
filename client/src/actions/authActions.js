import { TEST_DISPATCH } from './types';

//Register User
export const registerUser = userData => dispatch => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  }
}
//