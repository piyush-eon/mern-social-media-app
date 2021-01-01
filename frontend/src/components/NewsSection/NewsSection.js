import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

const NewsSection = () => {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(6);

  const newsApi = async () => {
    const news = await axios.get(
      "http://newsapi.org/v2/top-headlines?country=in&apiKey=3bea0ded0d3b4319922a2b1d6a934aa0"
    );
    setNewsArray(news.data.articles);
    setNewsResults(news.data.totalResults);
  };

  useEffect(() => {
    newsApi();
    // console.log(newsArray);
    // console.log(newsResults);
  }, [newsResults]);

  return (
    <div className="newsSection">
      <Card bg="primary" text="white" style={{ textAlign: "center" }}>
        <Card.Header>LATEST NEWS</Card.Header>
      </Card>
      {newsResults &&
        newsArray.slice(0, loadMore).map((news) => (
          <Card style={{ marginTop: 10 }}>
            <Card.Img variant="top" src={news.urlToImage} />
            <Card.Body>
              {/* <Card.Title>{news.title.substring(0, 40) + "..."}</Card.Title> */}
              {/* <Card.Title>{news.title}</Card.Title> */}
              <Card.Text>{news.description}</Card.Text>
            </Card.Body>
            <a href={news.url} target="__blank">
              <Button style={{ width: "100%" }} variant="info">
                Read more
              </Button>
            </a>
          </Card>
        ))}
      {loadMore !== 20 && (
        <>
          <hr />
          <Button
            style={{ width: "100%" }}
            onClick={() => setLoadMore(loadMore + 7)}
          >
            Load More News
          </Button>
        </>
      )}
    </div>
  );
};

export default NewsSection;
