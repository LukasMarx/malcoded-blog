import { action } from 'typesafe-actions'
import {
  SET_PRIMARY_COLOR,
  TOGGLE_DARK_MODE,
} from '../constants/theme.constants'
import { ThemeColor } from '../../models/Theme'

export const setPrimaryColor = (color: ThemeColor) =>
  action(SET_PRIMARY_COLOR, color)

export const toogleDarkMode = () => action(TOGGLE_DARK_MODE)
