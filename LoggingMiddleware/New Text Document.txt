const { Log } = require("./logger");

const ACCESS_TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjaGFtYXJ0aHlrYXJ0aGlrZXlhQGdtYWlsLmNvbSIsImV4cCI6MTc1NTU4NDc3MywiaWF0IjoxNzU1NTgzODczLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMzMxYmVhNzEtMTZmNy00NDQwLTg0MGMtY2U2ZmUxZjg1ODM2IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiY2hhbWFydGh5IHNhaSBrcmlzaG5hIGthcnRoaWtleWEiLCJzdWIiOiJhNGE5MGJiMi1kNTczLTQ0YWEtYjNkYi0yYmY2NTY5NzU4NGMifSwiZW1haWwiOiJjaGFtYXJ0aHlrYXJ0aGlrZXlhQGdtYWlsLmNvbSIsIm5hbWUiOiJjaGFtYXJ0aHkgc2FpIGtyaXNobmEga2FydGhpa2V5YSIsInJvbGxObyI6IjIya2QxYTA1MzEiLCJhY2Nlc3NDb2RlIjoiRlhDd3RZIiwiY2xpZW50SUQiOiJhNGE5MGJiMi1kNTczLTQ0YWEtYjNkYi0yYmY2NTY5NzU4NGMiLCJjbGllbnRTZWNyZXQiOiJ4ZXFUS3RRZ3BDUlhKblp5In0.qbOu-EpR0ZbzmAa3kxOTkftoZBHn93g-kp7qJhXysEU";

(async () => {
  // Example 1: Backend error in handler
  await Log("backend", "error", "handler", "received string, expected bool", ACCESS_TOKEN);

  // Example 2: Backend fatal DB issue
  await Log("backend", "fatal", "db", "Critical database connection failure", ACCESS_TOKEN);

  // Example 3: Frontend info log
  await Log("frontend", "info", "component", "Navbar mounted successfully", ACCESS_TOKEN);
})();
