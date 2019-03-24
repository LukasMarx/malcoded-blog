import { action } from 'typesafe-actions'
import { SET_TOKEN, SET_USER } from '../constants/auth.constants'
import { User } from '../../models/Token'

export const setToken = (token: string) => action(SET_TOKEN, token)

export const setUser = (user: User) => action(SET_USER, user)
