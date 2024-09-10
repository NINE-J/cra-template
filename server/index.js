const express = require('express');
const { faker } = require('@faker-js/faker');
const cors = require('cors');

const app = express();
const port = 5000;

// CORS 설정 (필요시)
app.use(cors());

// Faker로 가짜 사용자 데이터 생성 API
app.get('/api/users', (req, res) => {
  const count = 10;
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    });
  }
  res.json(users);
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
