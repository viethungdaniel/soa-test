import {
  all,
  // fork
} from "redux-saga/effects";

// import common from "./common/sagas";

export default function* rootSaga() {
  yield all([
    // fork(common)
  ]);
}
