// Custom logger middleware - prints method, url and time of every request
const logger = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next();
};

module.exports = logger;