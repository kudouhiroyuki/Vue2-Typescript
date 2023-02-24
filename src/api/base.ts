export interface ToSnakeCase {
  [key: string]: string | number;
}

export class BaseApi {
  public toSnakeCase(params: ToSnakeCase): object {
    const result: ToSnakeCase = {};
    Object.keys(params).forEach((baseKey) => {
      const convertKey = baseKey
        .split(/(?=[A-Z])/)
        .join("_")
        .toLowerCase();
      result[convertKey] = params[baseKey];
    });
    return result;
  }
}
