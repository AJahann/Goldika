"server only";
import axios from "axios";

let cachedToken: string | null = null;
let tokenExpiry: number | null = null;

async function getAccessToken() {
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  const tokenResponse = await axios.post(
    `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
    {
      client_id: process.env.AUTH0_CLIENT_ID_M2M,
      client_secret: process.env.AUTH0_CLIENT_SECRET_M2M,
      audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
      grant_type: "client_credentials",
    },
    {
      headers: { "content-type": "application/json" },
    },
  );

  cachedToken = tokenResponse.data.access_token;
  tokenExpiry = Date.now() + tokenResponse.data.expires_in * 1000; // زمان انقضای توکن

  return cachedToken;
}

export default getAccessToken;
