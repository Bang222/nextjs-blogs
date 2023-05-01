'use client'

import {FC} from 'react'
import {BlogPost} from '@/types/blog'
import BlogHeader from '@/components/BlogHeader'

interface BlogPreviewProps extends BlogPost {}

const BlogPreview: FC<BlogPreviewProps> = (props) => {
  const {bodyText, title, createdAt, tags, author, lastEdited} = props
  const preview: string = bodyText.substring(0, 150) + '...'
  return (
    <section>
      <BlogHeader author={author} createdAt={createdAt} />
      <h2 className={'font-bold text-2xl'}> {title}</h2>
      <p className={'mt-2'}>{preview}</p>
      <div className="flex gap-3">
        {tags?.map((tag, index) => {
          return (
            <p
              key={index}
              className={
                'bg-sky-500 p-1 rounded-lg text-black hover:bg-slate-50'
              }
            >
              {tag}
            </p>
          )
        })}
      </div>
    </section>
  )
}
export default BlogPreview
