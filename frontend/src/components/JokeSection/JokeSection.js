import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

const JokeSection = () => {
  const [jokesArray, setJokesArray] = useState([]);
  const [jokeResults, setJokeResults] = useState();
  const [loadMore, setLoadMore] = useState(5);

  const jokeApi = async () => {
    const joke = await axios.get(
      `https://official-joke-api.appspot.com/jokes/general/ten`
    );
    setJokesArray(joke.data);
    setJokeResults(joke.data.length);
  };

  useEffect(() => {
    jokeApi();
  }, [jokeResults, loadMore]);

  return (
    <div className="JokeSection">
      <Card bg="primary" text="white" style={{ textAlign: "center" }}>
        <Card.Header>Just for laughs </Card.Header>
      </Card>
      <Button
        style={{ width: "100%", marginTop: 5 }}
        variant="info"
        onClick={() => setLoadMore(loadMore + 5)}
      >
        Refresh
      </Button>
      {jokeResults &&
        jokesArray.map((joke) => (
          <Card style={{ marginTop: 10 }} key={joke.id}>
            <Card.Body>
              <Card.Title>{joke.setup}</Card.Title>
              <Card.Text>{joke.punchline}</Card.Text>
            </Card.Body>
            {/* <Card.Img variant="top" src={joke.urlToImage} /> */}
            {/* <a href={joke.url} target="__blank">
              <Button style={{ width: "100%" }} variant="info">
                Read more
              </Button>
            </a> */}
          </Card>
        ))}
    </div>
  );
};

export default JokeSection;
