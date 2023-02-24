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
  // [key: string]: object;
}

export interface MenusGetResponseResultDto {
  menus: {
    menu_id: number;
    menu_name: string;
    menu_image_url: string;
  }[];
}

// const test: MenusGetResponseResultDto[] = [
//   {
//     menuId: 1,
//     menuImageUrl: "https://beauty.tsuku2.jp/images/menus/menu_hair_01.jpg",
//     menuName: "カット",
//   },
// ];
// console.log(test);

export class MenusApi extends BaseApi {
  public async getMenus(params: MenusGetRequestBaseDto) {
    const resultParams = <MenusGetRequestResultDto>this.toSnakeCase(params);
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `https://beauty.tsuku2.jp/api/menus`,
      params: resultParams,
    };
    return await axios(options)
      .then((res: AxiosResponse<MenusGetResponseBaseDto>) => {
        // const resultRes: MenusGetResponseResultDto[] = res.data.menus;
        const resultRes = this.toCamelCase(res.data.menus);
        // console.log(resultRes);
        return resultRes;
      })
      .catch((error: AxiosError<{ error: string }>) => {
        throw new Error(error.message);
      });
  }
}
