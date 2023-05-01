import {getBlogsDetail} from "@/server/blogs";
import {BlogDetail} from "@/types/blog";
import BlogHeader from "@/components/BlogHeader";
import parser from 'html-react-parser'

interface BlogPostProps {
    params: {
        id?: number
    }
}

const BlogPost: ({params}: { params: any }) => Promise<JSX.Element> = async ({params}) => {
    const blogDetail: BlogDetail = await getBlogsDetail(params.id)
    return <>
        <div className={"flex justify-center items-center"}>
            <h1 className={"font-bold text-3xl"}> {blogDetail.title}</h1>
        </div>
        <div className={"flex justify-center items-center mt-5 pd-5"}>
            <BlogHeader createdAt={blogDetail.createdAt} author={blogDetail.author}/>
        </div>
        <div className={"w-screen flex justify-center m-4 p-4"}>
            <div className={"max-w-[50%]"}>{parser(blogDetail.bodyHTML)}</div>
        </div>
    </>
}
export default BlogPost
