import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from 'react-toastify';
import DateUtil from "../dateutils";
import Movie from "../component/MovieDetailComponent";
import { Link } from "react-router-dom";

export interface boxOfficeRank {
    rnum?: string;
    rank?: string;
    rankInten?: string;
    rankOldAndNew?: string;
    movieCd?: string;
    movieNm?: string;
    openDt?: string;
    salesAmt?: string;
    salesShare?: string;
    salesInten?: string;
    salesChange?: string;
    salesAcc?: string;
    audiCnt?: string;
    audiInten?: string;
    audiChange?: string;
    audiAcc?: string;
    scrnCnt?: string;
    showCnt?: string;
}

interface boxOfficeResult {
    boxofficeType: string;
    showRange: string;
    dailyBoxOfficeList: boxOfficeRank[];
}

interface movieObject {
    boxOfficeResult:boxOfficeResult;
}

const MovieApp = () => {
  const [loaded, setLoaded] = useState(false);
  const [movieList, setMovieList] = useState<boxOfficeRank[]>([]);
  const [selected, setSelected] = useState(0);

  const fetchMovieData = useCallback(async () => {
    if (!loaded) {
        try {
            const yesterday = DateUtil.yesterday();
            const response = await fetch(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=${yesterday}`);
            if (response.status == 200) {
                const json:movieObject = await response.json();
                setLoaded(true);
                setMovieList(json.boxOfficeResult.dailyBoxOfficeList);    
            }
        } catch (e) {
            toast.error('Failed to fetch data! ');
        }
    }
  }, [loaded]);

  const onChangeSelected = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.currentTarget.selectedIndex);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);


  return (
    <div>
        <h1>Movies!{loaded?` (${movieList.length})`:null}</h1>
        {loaded ?
            <select onChange={onChangeSelected} value={selected}>
              {movieList.slice(0, 20).map((item, index) => <option key={index} value={index}>{item.movieNm}</option>)}
            </select>
            : <strong>Loading...</strong>}
        {loaded ?
            <Link to={`/movie/${movieList[selected].movieCd}`}>
              <button>자세히보기</button>
            </Link>
            : null
        }
    </div>
  )
}

export default MovieApp