import React from 'react';
import './Movie.css';
// 영화추천 페이지
const Movie = () => {
  return (
    <div className="container">
      <div className="movie-card">
        <h1 className="movie-title">Movie Title</h1>
        <img src="https://cdn.topclass.chosun.com/news/photo/201812/4928_16904_3600.jpg" alt="Movie Poster" className="movie-image" />
        <p className="movie-description">하버드에 재학 중인 마크는 비밀클럽을 운영하는 윈클보스 형제에게 캠퍼스 내 미남미녀들만 교류하는 사이트 제작을 의뢰 받고 절친 왈도와 함께 페이스북을 개발해 런칭한다. 페이스북은 전세계 사람들에게 큰 인기를 얻고 마크는 순식간에 억만장자가 된다. </p>
        <button className="movie-button">Watch Now</button>
      </div>
    </div>
  );
};

export default Movie;
