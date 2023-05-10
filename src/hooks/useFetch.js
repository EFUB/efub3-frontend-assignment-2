import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, isLoading, error];
};

export default useFetch;
// const WeatherPage = () => {
//     const city = "Seoul";
//     const url = `${api.base}weather?q=${city}&appid=${api.key}`;
//     const [weather, setWeather] = useState("");

//     //url이 바뀔때마다 정보를 불러옴
//     useEffect(() => {
//       const city = "Seoul";
//       const url = `${api.base}weather?q=${city}&appid=${api.key}`;
//       axios.get(url).then((responseData) => {
//         const data = responseData.data;
//         setWeather({
//           id: data.weather[0].id,
//           temperature: data.main.temp,
//           main: data.weather[0].main,
//           loading: false,
//         });
//         console.log(data.id);
//       });
//     }, [url]);
