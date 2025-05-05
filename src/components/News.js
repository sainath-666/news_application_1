import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">News - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="Title 1" description="Description 1" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Title 1" description="Description 1" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Title 1" description="Description 1" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
