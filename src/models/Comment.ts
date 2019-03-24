export interface Comment {
  answers: { edges: { node: Comment }[] }
  author: Author
  post: string
  content: string
  creationDate: string
  deleted: false
  id: string
  updateDate: string
}

export interface Author {
  id: string
  displayName: string
  image: string
}
