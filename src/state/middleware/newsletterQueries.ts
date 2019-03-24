export const subscribeMutation = `
mutation subscribeToNewsletter($subscribeToNewsletterInput: SubscribeToNewsletterInput!) {
    subscribeToNewsletter(subscribeToNewsletterInput: $subscribeToNewsletterInput) {
        email
    }
}
`
