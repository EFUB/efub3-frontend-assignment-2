import axios from "axios";
import PhotoItem from "./Components/photoItem";
import { useState } from "react";
import styled from "styled-components";
import PhotoNav from "./Components/photonav";
import { useSearchParams } from "react-router-dom";
const Access_key = "-DlREVLk0SBFSjHjFkao3z8P7GFcakynrEYZZwNUB9k";

//photoPage : 사진을 주제에 맞게 렌더링하는 페이지
//외부 라이브러리인 unsplash를 사용하였음. useSearchParams를 사용해 navLink에서 준
//keyword를 추출하여 해당 keyword에 맞는 사진을 불러옴
//데이터를 받아올 때 외부 라이브러리인 axios를 사용하였음
const PhotoPage = () => {
  const [photoData, setePhotoData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const key = searchParams.get("keyword");
  let keyword = key;
  const url = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${Access_key}&per_page=12`;
  axios
    .get(url)
    .then((responseData) => {
      setePhotoData(responseData.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
  //photoData는 객체를 포함한 배열이므로 map을 사용해서 각각 사진을 photoItem이라는
  //컴포넌트로 렌더링
  return (
    <>
      <PhotoNav />
      <PhotoContainer>
        {photoData.map((photo) => {
          return <PhotoItem key={photo.id} src={photo.urls.regular} />;
        })}
      </PhotoContainer>
    </>
  );
};
export default PhotoPage;

const PhotoContainer = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;
