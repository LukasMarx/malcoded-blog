import { Middleware, MiddlewareAPI, Dispatch } from 'redux'
import { ActionType } from 'typesafe-actions'
import * as actions from './../actions/newsletter.actions'
import { AppState } from '../reducer'
import { NEWSLETTER_SUBSCRIBE_REQUEST } from '../constants/newsletter.constants'
import { subscribeMutation } from './newsletterQueries'

export type NewsletterAction = ActionType<typeof actions>

export const NewsletterMiddleware: Middleware = ({
  getState,
  dispatch,
}: MiddlewareAPI) => (next: Dispatch) => (action: NewsletterAction) => {
  const state: AppState = getState()
  const token = state.auth.token
  setTimeout(async () => {
    switch (action.type) {
      case NEWSLETTER_SUBSCRIBE_REQUEST: {
        subscribeToNewsletter(action.payload)
      }
    }
  })
  const returnValue = next(action)
  return returnValue
}

async function subscribeToNewsletter(email: string): Promise<void> {
  const result = await fetch(`${process.env.GATSBY_BASE_URL}/v1/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: subscribeMutation,
      variables: {
        subscribeToNewsletterInput: { email },
      },
    }),
  })
  const json = await result.json()
}
