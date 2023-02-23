import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export interface Menus {
  menu_id: number;
  menu_name: string;
  menu_image_url: string;
}

export interface MenusRequest {
  category_id: number;
}

export interface MenusResponse {
  menus: Menus[];
}

export class MenusApi {
  public async get(params: MenusRequest) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://beauty.tsuku2.jp/api/menus`,
      params,
    };
    return await axios(options)
      .then((res: AxiosResponse<MenusResponse>) => {
        return res.data.menus;
      })
      .catch((error: AxiosError<{ error: string }>) => {
        throw new Error(error.message);
      });
  }
}
