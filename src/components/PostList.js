import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

const PostList = ({ posts, fetchPostsAndUsers }) => {
    useEffect(() => fetchPostsAndUsers(), [fetchPostsAndUsers]);

    const renderList = posts.map((post) => {
        return (
            <div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId} />
                </div>
            </div>
        );
    });

    return <div className="ui relaxed divided list">{renderList}</div>;
};

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
