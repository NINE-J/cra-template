import { useEffect, useState } from 'react';

interface user {
  id: string;
  name: string;
  email: string;
}

const DummyList = () => {
  const [users, setUsers] = useState<user[]>();

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:5000';

    fetch(`${apiUrl}/api/users`)
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <ul>
      {users &&
        users.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
    </ul>
  );
};

export default DummyList;
