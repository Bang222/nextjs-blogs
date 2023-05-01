import {BlogPost} from '@/types/blog'
import {getBlogs} from '@/server/blogs'
import FilterBlogs from '@/components/FilterBlogs'

const ListBlogs: ({}: BlogPost) => Promise<JSX.Element> = async () => {
  const blogs: BlogPost[] = await getBlogs()
  let tags: string[] = []
  for (const blog of blogs) {
    for (const tag of blog.tags) {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    }
  }
  return <FilterBlogs blogs={blogs} tags={tags} />
}
export default ListBlogs
