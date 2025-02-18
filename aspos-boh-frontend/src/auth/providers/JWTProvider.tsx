/* eslint-disable no-unused-vars */
import axios, { AxiosResponse } from 'axios';
import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useEffect,
  useState
} from 'react';

import * as authHelper from '../_helpers';
import { type AuthModel, type UserModel } from '@/auth';

const API_URL = import.meta.env.VITE_DOMAIN;
export const LOGIN_URL = `${API_URL}/user/login`;
// export const REGISTER_URL = `${API_URL}/register`;
// export const FORGOT_PASSWORD_URL = `${API_URL}/forgot-password`;
// export const RESET_PASSWORD_URL = `${API_URL}/reset-password`;
// export const GET_USER_URL = `${API_URL}/user`;

interface AuthContextProps {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  auth: AuthModel | undefined;
  saveAuth: (auth: AuthModel | undefined) => void;
  currentUser: UserModel | undefined;
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>;
  login: (username: string, password: string) => Promise<void>;
  loginWithGoogle?: () => Promise<void>;
  loginWithFacebook?: () => Promise<void>;
  loginWithGithub?: () => Promise<void>;
  register: (username: string, password: string, password_confirmation: string) => Promise<void>;
  requestPasswordResetLink: (username: string) => Promise<void>;
  changePassword: (
    username: string,
    token: string,
    password: string,
    password_confirmation: string
  ) => Promise<void>;
  getUser: () => Promise<AxiosResponse<any>>;
  logout: () => void;
  verify: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth());
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>();

  // const verify = async () => {
  //   if (auth) {
  //     try {
  //       const { data: user } = await getUser();
  //       setCurrentUser(user);
  //     } catch {
  //       saveAuth(undefined);
  //       setCurrentUser(undefined);
  //     }
  //   }
  // };

  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth);
    if (auth) {
      authHelper.setAuth(auth);
    } else {
      authHelper.removeAuth();
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(LOGIN_URL, { username, password });
  
      if (response.data.status && response.data.data) {
        const { token, user, name, profilePic } = response.data.data;
  
        // Save token to local storage
        localStorage.setItem("token", token);
  
        // Save user info to context
        const userData: UserModel = {
          id: user,
          name: name,
          profilePic: profilePic,
          user: user,
        };
  
        setCurrentUser(userData);
        saveAuth({ token, user: userData });
  
        console.log("Login successful");
      } else {
        throw new Error(response.data.message || "Login failed");
      }
    } catch (error) {
      saveAuth(undefined);
      throw new Error(`Login error: ${error}`);
    }
  };
  
  

  // const register = async (username: string, password: string, password_confirmation: string) => {
  //   try {
  //     const { data: auth } = await axios.post(REGISTER_URL, {
  //       username, // Changed from email to username
  //       password,
  //       password_confirmation
  //     });
  //     saveAuth(auth);
  //     const { data: user } = await getUser();
  //     setCurrentUser(user);
  //   } catch (error) {
  //     saveAuth(undefined);
  //     throw new Error(`Error ${error}`);
  //   }
  // };

  // const requestPasswordResetLink = async (username: string) => {
  //   await axios.post(FORGOT_PASSWORD_URL, {
  //     username // Changed from email to username
  //   });
  // };

  // const changePassword = async (
  //   username: string,
  //   token: string,
  //   password: string,
  //   password_confirmation: string
  // ) => {
  //   await axios.post(RESET_PASSWORD_URL, {
  //     username, // Changed from email to username
  //     token,
  //     password,
  //     password_confirmation
  //   });
  // };

  // const getUser = async () => {
  //   return await axios.get<UserModel>(GET_USER_URL);
  // };

  const logout = () => {
    saveAuth(undefined);
    setCurrentUser(undefined);
    localStorage.removeItem('token');
  };

   // Set up Axios interceptor to handle 401 errors
   useEffect(() => {
    const axiosInterceptor = axios.interceptors.response.use(
      response => response, // Handle successful responses
      (error) => {
        if (error.response?.status === 401) {
          // Only trigger logout if 401 is due to invalid token or expired token
          logout();
        }
        return Promise.reject(error); // Propagate error
      }
    );

    return () => {
      axios.interceptors.response.eject(axiosInterceptor);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        auth,
        saveAuth,
        currentUser,
        setCurrentUser,
        login,
        register: async () => Promise.resolve(),
        requestPasswordResetLink: async () => Promise.resolve(),
        changePassword: async () => Promise.resolve(),
        getUser: async () => Promise.resolve({} as AxiosResponse),
        // register,
        // requestPasswordResetLink,
        // changePassword,
        // getUser,
        logout,
        // verify
        verify: async () => Promise.resolve()

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
