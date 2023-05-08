import styled from "styled-components";
//VideoItem
//video의 data를 담은 videoData를 불러옴
//map을 돌려서 비디오 하나씩 렌더링하는 함수
const VideoItem = ({ VideoData }) => {
  return VideoData.map((video) => {
    return (
      <Wrapper>
        <Video>{video.iframe}</Video>
        <Title>{video.title}</Title>
      </Wrapper>
    );
  });
};

export default VideoItem;

const Wrapper = styled.div`
  width: 550px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 100px;
`;
const Title = styled.div`
  font-size: 20px;
  text-align: center;
  border: 2px solid skyblue;
  font-weight: 600;
`;

const Video = styled.div`
  width: 550px;
  height: 290px;
`;
