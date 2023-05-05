import VideoItem from "./Component/videoItem";
import styled from "styled-components";
import MusicVideoData from "./Data/MusicVideoData";
import VideoNav from "./Component/videonav";
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
