import { Link } from 'react-router-dom';

function Users({ users }) {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/user/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
