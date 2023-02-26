import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { BaseApi } from "@/api/base";

export interface MenusGetRequestBaseDto {
  categoryId: number;
  [key: string]: string | number;
}

export interface MenusGetRequestResultDto {
  category_id: number;
}

export interface MenusGetResponseBaseDto {
  menus: {
    menu_id: number;
    menu_name: string;
    menu_image_url: string;
  }[];
}

export interface MenusGetResponseResultDto {
  menuId: number;
  menuName: string;
  menuImageUrl: string;
}

export class MenusApi extends BaseApi {
  public async getMenus(params: MenusGetRequestBaseDto): Promise<MenusGetResponseResultDto[]> {
    const resultParams = <MenusGetRequestResultDto>this.toSnakeCase(params);
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://beauty.tsuku2.jp/api/menus`,
      params: resultParams,
    };
    return await axios(options)
      .then((res: AxiosResponse<MenusGetResponseBaseDto>) => {
        const resultRes = <MenusGetResponseResultDto[]>(
          this.toCamelCase(res.data.menus)
        );
        return resultRes;
      })
      .catch((error: AxiosError<{ error: string }>) => {
        throw new Error(error.message);
      });
  }
}
