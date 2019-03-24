import { ActionType } from 'typesafe-actions'
import { combineReducers } from 'redux'
import * as actions from './../actions/auth.actions'
import { SET_TOKEN, SET_USER } from '../constants/auth.constants'
import { User } from '../../models/Token'

export type AuthState = {
  token: string
  user: User
}

export type AuthAction = ActionType<typeof actions>

export const auth = combineReducers<AuthState, AuthAction>({
  token: (state = null, action) => {
    switch (action.type) {
      case SET_TOKEN: {
        return action.payload
      }
      default:
        return state
    }
  },
  user: (state = null, action) => {
    switch (action.type) {
      case SET_USER: {
        return action.payload
      }
      default:
        return state
    }
  },
})
