const app = require("../app");

const { PORT } = process.env;

app.listen(PORT, () =>
  console.log(`http://localhost:${PORT} => 서버 실행 완료`),
);
