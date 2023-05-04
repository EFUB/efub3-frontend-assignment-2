import styled from "styled-components";

const VideoItem = () => {
  const VideoData = [
    {
      id: 1,
      iframe: (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Iwdq3NtpeFQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 2,
      iframe: (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/d-3cEQ1d1E4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: 3,
      iframe: (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/haceXrrm-LU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ];
  return VideoData.map((video) => {
    return <Wrapper>{video.iframe}</Wrapper>;
  });
};

export default VideoItem;

const Wrapper = styled.div`
  width: 800px;
  height: 500px;
  border-radius: 10px;
  background-color: grey;
  margin: 0 auto;
  margin-top: 100px;
`;
