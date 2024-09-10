import { useEffect, useState } from 'react';

/**
 * 사용자 정보를 나타내는 인터페이스
 *
 * @interface User
 * @property {string} id - 사용자의 고유 식별자
 * @property {string} name - 사용자의 이름
 * @property {string} email - 사용자의 이메일 주소
 */
interface User {
  id: string;
  name: string;
  email: string;
}

const DummyList = () => {
  const [users, setUsers] = useState<User[]>();

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
