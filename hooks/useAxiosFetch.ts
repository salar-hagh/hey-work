import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { theme } from "../theme/theme";
import { BASE_URL } from "../constants/servers";

export const AxiosFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async (
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET",
    params: any = {},
    hasFile: boolean = false
  ) => {
    let headers: any = {
      "content-type": hasFile
        ? "multipart/form-data"
        : "application/json; charset=utf-8",
      token: `${localStorage.getItem("token")}`,
    };

    setIsLoading(true);
    try {
      const response: AxiosResponse = await axios({
        baseURL: BASE_URL,
        url,
        data: params, // POST
        params: params, // GET
        headers,
        method,
      });
      if (response.status >= 200 && response.status <= 205) {
        if (
          typeof response?.data?.message === "string" &&
          response?.data?.message
        ) {
          toast(response?.data?.message, {
            style: {
              backgroundColor: theme.palette.success.main,
              color: theme.palette.primary[300],
            },
          });
        }
      } else {
        if (
          typeof response?.data?.message === "string" &&
          response?.data?.message
        ) {
          toast(response?.data?.message, {
            style: {
              backgroundColor: theme.palette.errors.main,
              color: theme.palette.white,
            },
          });
        }
      }
      return response;
    } catch (err) {
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    fetchData,
  };
};
