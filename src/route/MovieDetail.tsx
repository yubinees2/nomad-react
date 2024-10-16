import { useParams } from "react-router-dom";
import MovieDetailComponent from "../component/MovieDetailComponent";
import { boxOfficeRank } from "./Movie";
import { useCallback, useEffect, useState } from "react";
import DateUtil from "../dateutils";
import { toast } from "react-toastify";

interface INation {
    nationNm: string;
}
interface IGenre {
    genreNm: string;
}
interface IDirector {
    peopleNm: string;
    peopleNmEn: string;
}
interface IActor {
    peopleNm: string;
    peopleNmEn: string;
    cast: string;
    castEn: string;
}
interface IShowType {
    showTypeGroupNm: string;
    showTypeNm: string;
}
interface IAudit {
    auditNo: string;
    watchGradeNm: string;
}
interface ICompony {
    companyCd: string;
    companyNm: string;
    companyNmEn: string;
    companyPartNm: string;
}
interface IStaff {
    peopleNm: string;
    peopleNmEn: string;
    staffRoleNm: string;
}

interface IMovieInfo {
    movieCd: string;
    movieNm: string;
    movieNmEn: string;
    movieNmOg: string;
    prdYear: string;
    showTm: string;
    openDt: string;
    prdStatNm: string;
    typeNm: string;
    nations?: INation[];
    genres?: IGenre[];
    directors?: IDirector[];
    actors?: IActor[];
    showTypes?: IShowType[];
    audits?: IAudit[];
    companys?: ICompony[];
    staffs?: IStaff[];
}

interface IMovieDetailWrap {
    movieInfo: IMovieInfo;
    source?: string;
}

interface IMovieDetail {
    movieInfoResult: IMovieDetailWrap
}

const MovieDetail = () => {
    const movieCd = useParams().code;
    const [loaded, setLoaded] = useState(false);
    const [movie, setMovie] = useState<IMovieInfo>();
    const fetchMovieData = useCallback(async () => {
        if (!loaded) {
            try {
                const response = await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=82ca741a2844c5c180a208137bb92bd7&movieCd=${movieCd}`);
                if (response.status == 200) {
                    const json:IMovieDetail = await response.json();
                    setLoaded(true);
                    setMovie(json.movieInfoResult.movieInfo);    
                }
            } catch (e) {
                toast.error('Failed to fetch data! ');
            }
        }
      }, [loaded]);

    useEffect(() => {
        fetchMovieData();
    }, []);


    return (
        <div>
            {loaded && movie
            ? <MovieDetailComponent 
                movieNm={movie.movieNm}
                openDt={movie.openDt}
            /> 
            : null
            }
        </div>
    )    
}
export default MovieDetail;