import Cookies from "js-cookie";

export const csrfFetch = async (url, options = {}) => {
  console.log({ options });
  options.method = options.method || "GET";
  options.headers = options.headers || {};

  if (options.method.toUpperCase() !== "GET") {
    options.headers["Content-Type"] =
      options.headers["Content-Type"] || "application/json";
    options.headers["XSRF-Token"] = Cookies.get("XSRF_TOKEN");
    console.log("Non GET Options", options);
  }

  const res = await window.fetch(url, options);

  if (!res.ok) throw res;

  return res;
};

export const restoreCSRF = () => {
  return csrfFetch("/api/csrf/restore");
};
