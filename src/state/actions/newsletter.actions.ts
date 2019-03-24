import { NEWSLETTER_SUBSCRIBE_REQUEST } from '../constants/newsletter.constants'
import { action } from 'typesafe-actions'

export const subscribeNewsletter = (email: string) =>
  action(NEWSLETTER_SUBSCRIBE_REQUEST, email)
