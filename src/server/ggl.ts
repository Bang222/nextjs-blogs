export const discussionGql = (ghDiscussionCategoryId: string | undefined) => {
  return `{
        repository(owner: "Bang222", name: "nextjs-blogs") {
            discussions(first: 100, categoryId: "${ghDiscussionCategoryId}") {
              nodes {
                title
                url
                number
                bodyHTML
                bodyText
                createdAt
                lastEditedAt
                author {
                  login
                  url
                  avatarUrl
                }
                 labels(first: 100) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
    }`
}
export const discussionDetailGgl = (postId: number | undefined) => {
  return `{
  repository(owner: "Bang222", name: "nextjs-blogs") {
   discussion(number: ${postId}){
        title
        bodyHTML
        createdAt
        author {
          login
          url
          avatarUrl
         }
      }
   }
}`
}
