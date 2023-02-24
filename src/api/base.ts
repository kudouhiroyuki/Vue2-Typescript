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
  public toCamelCase(resData: ToCamelCase[]): object {
    const result = resData.map((value: ToCamelCase) => {
      const convertObj: ToCamelCase = {};
      for (const key of Object.keys(value)) {
        const convertKey = key
          .split("_")
          .map((word: string, index: number) => {
            if (index === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          })
          .join("");
        convertObj[convertKey] = value[key];
      }
      return convertObj;
    });
    return result;
  }
}
