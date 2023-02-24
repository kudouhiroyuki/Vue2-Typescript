export interface ToSnakeCase {
  [key: string]: string | number;
}
export interface ToCamelCase {
  [key: string]: string | number;
}

export class BaseApi {
  public toSnakeCase(params: ToSnakeCase): object {
    const result: ToSnakeCase = {};
    for (const key of Object.keys(params)) {
      const convertKey = key
        .split(/(?=[A-Z])/)
        .join("_")
        .toLowerCase();
      result[convertKey] = params[key];
    }
    return result;
  }
  public toCamelCase(resData: any): any {
    const result: any = [];
    // const test = [params].map((value) => {
    //   console.log(value);
    // });
    resData.forEach((value: any, index: any) => {
      Object.keys(value).forEach((k: any, v: any) => {
        const convertKey = k
          .split("_")
          .map(function (word: any, index: any) {
            if (index === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          })
          .join("");
      });
      result.push({ aaaa: 111 });
    });
    console.log(result);
    return result;
  }
}
