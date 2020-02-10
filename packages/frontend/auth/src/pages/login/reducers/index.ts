import { createReducer } from '@frontend/utils/reducer'
import * as actions from '../constants'

const initialState = {
  email: '',
  password: '',
  errors: {},
}

export default createReducer(
  initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, value: field }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
  [actions.clear]: () => initialState,
})
