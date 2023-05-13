import { useState, useEffect } from "react";
import axios from "axios";

//useFetch : api를 가져오는 커스텀 훅. axios를 사용해서 초기값으로 받은 url로
//데이터 요청을 보냅니다(get).
//useEffect을 사용해서 url이 바뀔 때마다 state가 업데이트가 되게 합니다.
//data가 들어오기 전까진 loading, axios가 실해하면 error가 뜨게 합니다.
const useFetch = (url) => {
  const [fetchData, setfetchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((responseData) => {
        const data = responseData.data;
        setfetchData(data);
        setLoading(false);
        setError(false);
        console.log("axios 실행중");
      })
      .catch(setError(true));
  }, [url]);

  return [fetchData, loading, error];
};

export default useFetch;
