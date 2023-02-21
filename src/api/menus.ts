import axios from "axios";

export interface Params {
  category_id: number;
}

export const get = async (params: Params) => {
  try {
    const res = await axios.get(`https://beauty.tsuku2.jp/api/menus`, {
      params,
    });
    return res.data;
  } catch (error) {
    console.log("getMenus axios error", error);
    return;
  }
};
