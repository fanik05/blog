import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

const PostList = ({ fetchPosts }) => {
    useEffect(() => {
        fetchPosts()
    }, [fetchPosts])

    return (
        <div>
            Post List
        </div>
    )
}

export default connect(null, { fetchPosts })(PostList)