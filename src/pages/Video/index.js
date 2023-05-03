import VideoItem from "./Component/videoItem";
import styled from "styled-components";
const VideoPage = () => {
  return (
    <Wrapper>
      <VideoItem />
    </Wrapper>
  );
};
export default VideoPage;

const Wrapper = styled.div`
  margin: 0 auto;
`;
