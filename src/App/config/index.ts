import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  PORT: process.env.PORT,
  data_Url: process.env.DATABASE_URL,
  bycrypt_salts: process.env.bycrypt_salts_Round,
  json_web_token: process.env.JWT_ACCESS_TOKEN,
  token_expire: process.env.JWT_TOKEN_EXPIRED,
  refresh_web_token: process.env.JWT_REFRESH_TOKEN,
  expire_refresh_token: process.env.JWT_REFRESH_EXPIRED,
  node_development: process.env.NODE_ENV,
};
