// Autor: By Fabio Moraes

interface IQueryParams {
  page?: number;
  limit?: number;
  params?: string[];
}

interface IQueryURI {
  name: string;
  value: string;
}

function urlParams() {
  const url = new URL(<any>window.location);
  const urlSearch = new URLSearchParams(url.search);
  return { urlSearch, url };
}

export function queryParams(data?: IQueryParams) {
  const urlParamsQ = urlParams();
  const qr = urlParamsQ.urlSearch;

  const pp = data?.page || 1;
  const ll = data?.limit || 15;

  const objectAssign: any = {};

  const page = qr.get("page") || String(pp);
  const limit = qr.get("limit") || String(ll);

  data?.params?.forEach((item) => {
    Object.assign(objectAssign, { [item]: qr.get(item) || "" });
  });

  return {
    searchURI: urlParamsQ.url.search,
    page,
    limit,
    query: objectAssign,
  };
}

export function queryURI(params: IQueryURI) {
  const url = urlParams();
  const objectAssing: any = {};

  const search = url.url?.search || "";

  if (search) {
    const arrSearch = search.replace("?", "").split("&");
    const verifyIfNotExistsSearch = !!arrSearch.find((item) =>
      item.includes(params.name)
    );

    if (!verifyIfNotExistsSearch) {
      Object.assign(objectAssing, { [params.name]: params.value });
    }

    arrSearch.forEach((item) => {
      const structure = item.split("=");
      const name = structure[0];
      const value = params.name === name ? params.value : structure[1];

      Object.assign(objectAssing, { [name]: value });
    });
  } else {
    Object.assign(objectAssing, { [params.name]: params.value });
  }

  const res = Object.keys(objectAssing).map((key) => {
    return `${key}=${objectAssing[key]}`;
  });

  return `?${res.join("&")}`;
}

export const queryObjectURI = (object: any) => {
  let str = "";

  Object.keys(object).forEach((key) => {
    str += `${key}=${object[key]}&`;
  });

  return `?${str}`;
};
