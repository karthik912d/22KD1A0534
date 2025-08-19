const axios = require("axios");

/**
 * 
 * 
 * @param {"backend"|"frontend"} stack - Where the log is coming from
 * @param {"debug"|"info"|"warn"|"error"|"fatal"} level - Severity
 * @param {string} pkg - Which module/package (rules depend on backend/frontend)
 * @param {string} message - Descriptive log message
 * @param {string} token - access_token (from /auth API)
 */
async function Log(stack, level, pkg, message, token) {
  try {
    const res = await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      { stack, level, package: pkg, message },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Log sent:", res.data);
  } catch (err) {
    if (err.response) {
      console.error("❌ Log error:", err.response.data);
    } else {
      console.error("❌ Log error:", err.message);
    }
  }
}

module.exports = { Log };
