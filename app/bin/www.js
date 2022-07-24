const httpServer = require("../app");

const { PORT } = process.env;

const handleListen = () =>
  console.log(`http://localhost:${PORT} => 서버 실행 완료`);
httpServer.listen(PORT, handleListen);
