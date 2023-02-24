import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { BaseApi } from "@/api/base";

export interface MenuEntity {
  menuId: number;
  menuName: string;
  menuImage_url: string;
}

export interface MenusGetRequestBaseDto {
  categoryId: number;
  [key: string]: string | number;
}

export interface MenusGetRequestResultDto {
  category_id: number;
}

export interface MenusGetResponseDto {
  menus: MenuEntity[];
}

export class MenusApi extends BaseApi {
  public async getMenus(params: MenusGetRequestBaseDto) {
    const resultParams = <MenusGetRequestResultDto>this.toSnakeCase(params);
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://beauty.tsuku2.jp/api/menus`,
      params: resultParams,
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
