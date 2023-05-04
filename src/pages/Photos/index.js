import axios from "axios";
import PhotoItem from "./Components/photoItem";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import PhotoNav from "./Components/photonav";
import { useSearchParams } from "react-router-dom";
const Access_key = "-DlREVLk0SBFSjHjFkao3z8P7GFcakynrEYZZwNUB9k";

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
