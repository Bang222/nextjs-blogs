import {Inter} from 'next/font/google'
import {NextPage} from 'next'
import ListBlogs from '@/components/ListBlogs'

const inter = Inter({subsets: ['latin']})

const Home: NextPage = () => {
  return (
    <main className="w-screen h-screen overflow-auto flex flex-col items-center bg-zinc-500 text-neutral-300 font-poppins">
      <title>Home pages</title>
      <section>
        <div className="mt-3 text-center">
          <h1 className="text-[3rem]">Welcome to Blogs Of Bang danh :v</h1>
          <p>Full stack blog with nextjs</p>
        </div>
        <div
          className={
            'max-w-screen flex flex-col justify-center item-center text-[1.15rem] mt-12'
          }
        >
          <ListBlogs />
        </div>
      </section>
    </main>
  )
}
export default Home
