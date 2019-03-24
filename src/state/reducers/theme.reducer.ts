import { ActionType } from 'typesafe-actions'
import { combineReducers } from 'redux'
import { ThemeColor } from '../../models/Theme'
import * as actions from './../actions/theme.actions'
import {
  SET_PRIMARY_COLOR,
  TOGGLE_DARK_MODE,
} from '../constants/theme.constants'

export type ThemeState = {
  primaryColor: ThemeColor
  darkMode: boolean
}

export type ThemeAction = ActionType<typeof actions>

export const theme = combineReducers<ThemeState, ThemeAction>({
  primaryColor: (state = null, action) => {
    switch (action.type) {
      case SET_PRIMARY_COLOR: {
        return action.payload
      }
      default:
        return state
    }
  },
  darkMode: (state = false, action) => {
    switch (action.type) {
      case TOGGLE_DARK_MODE: {
        return !state
      }
      default:
        return state
    }
  },
})
