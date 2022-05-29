import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
//import data from "./SampleOutput.json";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// const API_KEY = "dab67a9f438440619f2e135dc206eb65";
const API_KEY = "9a8b3136620148b0befa2e6d07de4f1e";
//const API_KEY = "77072947774f496ea3ca29436894c60b";
const News = (props) => {
  const [articles, setArticle] = useState([]);
  const [loading, setLoding] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${API_KEY}&page=${page}&pageSize=${props.pageSize}`;
    setLoding(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticle(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoding(false);
    props.setProgress(100);
  };
  const CapitlizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = ` ${CapitlizeString(props.category)} - NewsTak`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${API_KEY}&page=${page + 1}&pageSize=${
      props.pageSize
    }`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "80px" }}
      >
        NewsTak - Top {props.category} Headlines
      </h1>
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container ">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultPros = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
