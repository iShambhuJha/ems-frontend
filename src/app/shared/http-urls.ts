import { environment } from '../../environments/environment';

export class HttpUrls {
  // USER AUTH API URLS
  public static USER_CREATE_ACCOUNT = `${environment.apiUrl}/createUser`;
  public static USER_LOGIN = `${environment.apiUrl}/login`;
}