const debug = process.env.NODE_ENV !== "production";
const name = "guildcommit1";

module.exports = {
  "process.env.BACKEND_URL": !debug ? `/${name}` : "",
};
