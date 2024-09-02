import { useParams } from 'react-router-dom';

function UserProfile({ users }) {
  const { userID } = useParams();
  const user = users.find((user) => user.id === +userID);

  return (
    <div>
      <h3>{user.name}</h3>
      <p>USER ID: {userID}</p>
    </div>
  );
}

export default UserProfile;
