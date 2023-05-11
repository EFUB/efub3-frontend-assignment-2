import {
  TiWeatherSunny,
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherCloudy,
} from "react-icons/ti";

//날씨 아이콘을 골라주는 함수
//index.js에서 weather를 가져와서 맞는 아이콘을 출력함
const SelectIcon = (weather) => {
  let iconId = weather.id === 800 ? 0 : (parseInt(weather.id) / 100).toFixed(0);
  switch (iconId) {
    case "0":
      return <TiWeatherSunny size="17rem" color="white" />;
    case "2":
      return <TiWeatherStormy size="17rem" color="white" />;
    case "3":
      return <TiWeatherShower size="17rem" color="white" />;
    case "5":
      return <TiWeatherDownpour size="17rem" color="white" />;
    case "6":
      return <TiWeatherSnow size="17rem" color="white" />;
    case ("7", "8"):
      return <TiWeatherCloudy size="17rem" color="white" />;
    default:
      return <TiWeatherSunny size="17rem" color="white" />;
  }
};

export default SelectIcon;
