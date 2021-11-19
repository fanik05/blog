import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = ({ userId, user, fetchUser }) => {
    useEffect(() => fetchUser(userId), [fetchUser, userId]);

    return (
        <div>{user && user.name}</div>
    );
};

const mapStateToProps = ({ users }, { userId }) => ({ 
    user: users.find(user => user.id === userId) 
});

export default connect(mapStateToProps, { fetchUser })(UserHeader);