import Link from 'next/link'
import axios from 'axios';


export const getStaticProps = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return {
        props: {
            posts: res.data
        }
    }
}

const post = ({ posts }) => {
    return (
        <div>
            {
                posts.map(post => (<h2 key={post.id}>{post.title} <Link href={`/post/${post.id}`}><button>See Details</button></Link></h2>))
            }
        </div>
    )
}

export default post