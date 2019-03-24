export interface Token {
  access_token: string
  user: User
}

export interface User {
  id: string
  displayName: string
  image: string
}
