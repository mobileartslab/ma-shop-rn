import { put, call, takeLatest } from 'redux-saga/effects'
import API from './api'
import { actionSuccess, actionError } from './actions'
import { LOGIN, GET_INVENTORY } from './action_types'

export const login = function* (action) {
  console.log('IN login() - action', action)
  const { type } = action
  try {
    const data = yield call(API.login, action.data)
    console.log('IN login() - data: ', data)
    yield put(actionSuccess(data, type))
  } catch (error) {
    yield put(actionError(error, type))
  }
}
export const watchLogin = function* () {
  yield takeLatest(LOGIN, login)
}

export const getInventory = function* (action) {
  console.log('IN getInventory() - action', action)
  const { type } = action
  try {
    const data = yield call(API.getInventory, action.data)
    console.log('IN getInventory() - data: ', data)
    yield put(actionSuccess(data, type))
  } catch (error) {
    yield put(actionError(error, type))
  }
}
export const watchGetInventory = function* () {
  yield takeLatest(GET_INVENTORY, getInventory)
}
