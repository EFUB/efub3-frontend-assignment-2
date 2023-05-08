import VideoItem from "./Component/videoItem";
import styled from "styled-components";
import VideoNav from "./Component/videonav";

//App.js에서 route설정할 때 각 url에 맞는 videoDate를 props로 전달받아옴
//받아온 Data를 Item에 다시 props로 전달함
const VideoPage = ({ VideoData }) => {
  return (
    <Wrapper>
      <VideoNav />
      <VideoItem VideoData={VideoData} />
    </Wrapper>
  );
};
export default VideoPage;

const Wrapper = styled.div`
  margin: 0 auto;
`;
