import { connect } from 'react-redux';

const UserHeader = ({ user }) => {
    return <div>{user && user.name}</div>;
};

const mapStateToProps = ({ users }, { userId }) => ({
    user: users.find((user) => user.id === userId),
});

export default connect(mapStateToProps)(UserHeader);
