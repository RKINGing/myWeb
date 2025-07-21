import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY; // 替换为你的实际API密钥


const weatherClient = axios.create({
  baseURL: "https://restapi.amap.com/v3/ip",
  timeout: 5000,
});
async function getIpLocation() {
  try {
    const response = await weatherClient.get("", {
      params: {
        key: API_KEY,
      },
    });
    if (response.data.status === "1") {
      return response.data.adcode; // 返回城市的adcode
    } else {
      throw new Error("获取IP位置失败");
    }
  } catch (error) {
    console.error("获取IP位置时发生错误:", error);
    throw error;
  }
}

const weatherApi = axios.create({
  baseURL: "https://restapi.amap.com/v3/weather/weatherInfo",
  timeout: 5000,
});
//adcode为城市的adcode
async function getWeather(adcode) {
  try {
    const response = await weatherApi.get("", {
      params: {
        key: API_KEY,
        city: adcode,
        extensions: "base",
      },
    });
    if (response.data.status === "1") {
      return response.data.lives[0];
    } else {
      throw new Error("获取天气信息失败");
    }
  } catch (error) {
    console.error("获取天气信息时发生错误:", error);
    throw error;
  }
}
export { getIpLocation, getWeather };
