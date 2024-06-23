import { spawn, all } from 'redux-saga/effects'
import {
  watchLogin,
  watchGetInventory,
} from './app_sagas'

const rootSaga = function* () {
  yield all([
    spawn(watchGetInventory),
    spawn(watchLogin),
  ])
}

export default rootSaga
