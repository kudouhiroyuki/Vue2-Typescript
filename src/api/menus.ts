import axios from "axios";

export interface Params {
  category_id: number;
}

export class MenusApi {
  public async get(params: Params) {
    return await axios
      .get(`https://beauty.tsuku2.jp/api/menus`, { params })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error;
      });
  }
}
