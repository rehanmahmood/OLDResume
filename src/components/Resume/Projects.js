import React from "react";
//import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import "./Projects.css";
import {Sentiment, Predictor, Greact} from "../../assests/Home";
import Card3 from "./card3";
import Card2 from "./card2";
import { Container, Grid } from "@mui/material";


function Projects() {
  return (

    <div className="cards">
      <div className="cards__container">
        <h1>Check Out My Projects</h1>
        <div className="cards__wrapper">
        <Container>
            <Grid container spacing={3}>
          <ul className="cards__items">
            <CardItem
              title="Financial Sentiment Analysis"
              description="Webscrapping using BeautifulSoup4 and sentiment analysis using NLTK libraries to summarize sentiment from global financial data."
              alttitle="Sentiment Analysis"
              src={Sentiment}
            />
            <Card3
              title="Stock Predictor      "
              description="Organized Stock Data into testing and training sets and trained tensorflow based model to predict future prices."
              alttitle="Predictor"
              src={Predictor}
            />
            <Card2
              title="React based GUI     "
              description="Terminal platform built in react displaying all nessecary finicial prices and instruments in UI friendly manner."
              alttitle="React"
              src={Greact}
            />
          </ul>
          </Grid>
    </Container>
        </div>
      </div>
    </div>
  );
}

export default Projects;
