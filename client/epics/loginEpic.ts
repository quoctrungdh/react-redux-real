import { ofType } from 'redux-observable';

import { mergeMap } from 'rxjs/operators';

import { auth } from '../agent';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginRequest = (userCredentail) => ({ type: LOGIN_REQUEST, userCredentail })
const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });
const loginFail = (error) => ({ type: LOGIN_FAIL, error });

export const loginEpic = action$ => action$.pipe(
  ofType(LOGIN_REQUEST),
  mergeMap(({ userCredentail }) => auth.login(userCredentail)
    .then(loginSuccess)
    .catch(loginFail)
  )
)
