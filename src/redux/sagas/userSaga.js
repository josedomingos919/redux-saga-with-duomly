import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

async function getApi() {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  } catch (e) {
    return []
  }
}

function* fetchUsers(action) {
  try {
    const users = yield call(getApi)

    yield put({
      type: 'GET_USERS_SUCCESS',
      users,
    })
  } catch (e) {
    yield put({
      type: 'GET_USER_FAILED',
      message: e?.message,
    })
  }
}

function* userSaga() {
  yield takeEvery('GET_USERS_RQUESTED', fetchUsers)
}

export default userSaga
