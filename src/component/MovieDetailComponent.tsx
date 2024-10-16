import { useCallback, useEffect, useMemo, useState } from "react";
import { boxOfficeRank } from "../route/Movie";
import { Link } from "react-router-dom";

const MovieDetailComponent = ({
    movieNm,
    audiCnt,
    rank,
    openDt
  }:{
    movieNm?:string,
    audiCnt?:string,
    rank?:string,
    openDt?:string
  }) => {
  return (
    <div>
      {movieNm? <p>제목 : {movieNm}</p>:null}
      {rank? <p>순위 : {rank}</p>:null}
      {audiCnt? <p>관객 수 : {audiCnt}</p>:null}
      {openDt? <p>상영일: {openDt}</p>:null}
    </div>    
  )
};

export default MovieDetailComponent;