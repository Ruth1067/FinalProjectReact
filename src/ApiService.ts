import axios from 'axios';

interface AuthResult {
  token: string;
}

const apiUrl = "https://localhost:7183/api";
axios.defaults.baseURL = apiUrl;

console.log('API URL:', apiUrl);

setAuthorizationBearer();

function saveAccessToken(authResult: AuthResult) {
  localStorage.setItem("access_token", authResult.token);
  setAuthorizationBearer();
}

function setAuthorizationBearer() {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
}

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

function decodeToken(token: string) {
  const payload = token.split('.')[1];
  return JSON.parse(atob(payload));
}

export default {
  getLoginUser: () => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      return decodeToken(accessToken);
    }
    return null;
  },

  logout: () => {
    localStorage.setItem("access_token", "");
  },

register: async (userName: string, password: string, email: string, phoneNumber: string) => {
    const res = await axios.post<AuthResult>("/register", { userName, password, email, phoneNumber});
    saveAccessToken(res.data);
},


  login: async (email: string, password: string) => {
    const res = await axios.post<AuthResult>("/login", { email, password });
    saveAccessToken(res.data);
  },

  getCourses: async () => {
    const res = await axios.get("/Folder");
    return res.data;
  },

  getPrivate: async () => {
    const res = await axios.get("/User");
    return res.data;
  }
};
