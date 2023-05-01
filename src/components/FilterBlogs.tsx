'use client'
import React, {FC, useEffect, useMemo, useState} from 'react'
import {BlogPost} from '@/types/blog'
import BlogPreview from '@/components/BlogPreview'

interface FilterTabsProps {
  tags: string[]
  blogs: BlogPost[]
}

const FilterBlogs: FC<FilterTabsProps> = (props) => {
  const {tags, blogs} = props

  const [filterWord, setFilterWord] = useState<string[]>([])
  const [selectedIdx, setSelectedIdx] = useState<number[]>([])

  const filterBlog: BlogPost[] = useMemo(() => {
    return filterWord.length > 0
      ? blogs.filter((blog: BlogPost) => {
          return filterWord.every((filter) => blog.tags.includes(filter))
        })
      : blogs
  }, [filterWord])
  const filerLabel = (tag: any, idx: number) => {
    if (selectedIdx.includes(idx)) {
      setSelectedIdx(selectedIdx.filter((id) => id !== idx))
      //innerText chữ trong cái Tag
      setFilterWord(filterWord.filter((filter) => filter !== tag.innerText))
    } else {
      setSelectedIdx([...selectedIdx, idx])
      setFilterWord((filterWord) => [...filterWord, tag.innerText])
    }
  }
  useEffect(() => {
    console.log(filterWord)
  }, [filterWord])
  return (
    <>
      <div className="flex flex-column gap-3 mb-4 p-2 justify-center">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className={`${
                selectedIdx.includes(index)
                  ? 'justify-center items-center bg-sky-800 rounded-[10px] p-2 hover:bg-amber-200'
                  : 'justify-center items-center bg-sky-500 rounded-[10px] p-2 hover:bg-blue-200'
              }`}
              onClick={(e) => filerLabel(e.target, index)}
            >
              {tag}
            </button>
          )
        })}
      </div>
      <div className={'flex justify-center items-center'}>
        <div className={'mb-12'}>
          {filterBlog?.map((blog: BlogPost) => {
            return (
              <>
                <div
                  key={blog.id}
                  className={
                    'max-w-[27em] max-h-[20] overflow-hidden mx-6 mb-6 bg-neutral-300 text-zinc-800 rounded-lg p-4 hover:bg-neutral-500 transition-all duration-300'
                  }
                >
                  <a href={blog.url} rel={'noreferrer'}>
                    <BlogPreview
                      title={blog.title}
                      bodyText={blog.bodyText}
                      createdAt={blog.createdAt}
                      author={blog.author}
                      tags={blog.tags}
                    />
                  </a>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default FilterBlogs
