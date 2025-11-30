import axios, { AxiosRequestConfig } from "axios";

export async function getData<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
  const start = performance.now();
  try {
    const res = await axios.get<T>(url, options);
    const duration = (performance.now() - start).toFixed(2);
    console.log(`Fetched ${url} in ${duration}ms`);
    return res.data;
  } catch (error) {
    console.error(`Failed to fetch ${url}`, error);
    throw error;
  }
}
