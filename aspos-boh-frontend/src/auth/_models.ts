import { type TLanguageCode } from '@/i18n';

export interface AuthModel {
  access_token?: string;
  refreshToken?: string;
  token: string;
  user?: UserModel;
}

export interface UserModel {
  id: number;
  name?: string;
  user: string;
  // password: string | undefined;
  // email: string;
  // first_name: string;
  // last_name: string;
  // fullname?: string;
  // occupation?: string;
  // companyName?: string;
  // phone?: string;
  // roles?: number[];
  // pic?: string;
  // language?: TLanguageCode;
  // auth?: AuthModel;
  profilePic?: string;
}
