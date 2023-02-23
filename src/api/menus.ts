import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export interface MenuEntity {
  menu_id: number;
  menu_name: string;
  menu_image_url: string;
}

export interface MenusGetRequestDto {
  category_id: number;
}

export interface MenusGetResponseDto {
  menus: MenuEntity[];
}

export class MenusController {
  public async getMenus(params: MenusGetRequestDto) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://beauty.tsuku2.jp/api/menus`,
      params,
    };
    return await axios(options)
      .then((res: AxiosResponse<MenusGetResponseDto>) => {
        return res.data.menus;
      })
      .catch((error: AxiosError<{ error: string }>) => {
        throw new Error(error.message);
      });
  }
}
