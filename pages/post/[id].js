import axios from 'axios'

export const getStaticPaths = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const paths = data.map(post => {
        return {
            params: {
                id: post.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    return {
        props: {
            data
        }
    }
}

const specificPost = ({ data }) => {

    return (
        <div>
            <h1>{data.title}</h1>
        </div>
    );
};

export default specificPost;