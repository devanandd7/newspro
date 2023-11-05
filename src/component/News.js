import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spiner from "./Spiner";
import InfiniteScroll from "react-infinite-scroll-component";




export class News extends Component {
  // articles = [] //when using map(),you must impoetant that whom call map(),declear in array globly.
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      
     
    };
  }

  async componentDidMount() {

    // this is old code to fectching the data from api.

    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=48daa5db78b84b72adfbd8a2fa093dc9&page=1&pagesize=${this.props.pagesize}`;

    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseData = await data.json();

    // this.setState({
    //   articles: parseData.articles,
    //   parseResults: parseData.totalResults,
    //   loading: false,
    // });
    this.updatePage()
  }


  // this function for updating page like - next , preview , and showing data.
  updatePage = async () => {
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=48daa5db78b84b72adfbd8a2fa093dc9&page=${this.state.page}&pagesize=${this.props.pagesize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      articles: parseData.articles,
      parseResults: parseData.totalResults,
      loading: false,
      
    });
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=48daa5db78b84b72adfbd8a2fa093dc9&page=${this.state.page}&pagesize=${this.props.pagesize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
     
      articles: this.state.articles.concat(parseData.articles),
      parseResults: parseData.totalResults,
      loading: false,
     
     
    });
  }


  // previewPage = async () => {

  //   // old code of preview button function.

  //   // console.log("preview");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=48daa5db78b84b72adfbd8a2fa093dc9&page=${
  //   //   this.state.page - 1
  //   // }&pagesize=${this.props.pagesize}`;

  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();

  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parseData.articles,
  //   //   loading: false,
  //   // });
  //   this.setState({ page: this.state.page - 1 })
  //   this.updatePage()
  // };



  // nextPage = async () => {

  //   // old code of next button function.

  //   // console.log("next");
  //   // if (
  //   //   !(
  //   //     this.state.page + 1 >
  //   //     Math.ceil(this.state.totalResults / this.props.pagesize)
  //   //   )
  //   // ) {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=48daa5db78b84b72adfbd8a2fa093dc9&page=${
  //   //     this.state.page + 1
  //   //   }&pagesize=${this.props.pagesize}`;

  //   //   this.setState({ loading: true });
  //   //   let data = await fetch(url);
  //   //   let parseData = await data.json();

  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parseData.articles,
  //   //     loading: false,
  //   //   });
  //   // }

  //   this.setState({ page: this.state.page + 1 })
  //   this.updatePage()
  // };

  render() {
    return (
      <div className="container my-3">
        <h1 className="container text-center">News-pro</h1>
        {this.state.loading}



        <div className="row">

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.parseResults}
            loader={<Spiner/>}
          >
            <div className="row">
              {
                this.state.articles.map((Element) => {
                  return (
                    <div className="col-md-4" key={Element.url}>
                      <NewsItems
                        title={Element.title}
                        description={Element.description}
                        ImageUrl={Element.urlToImage}
                        readMoreUrl={Element.url}
                        author={Element.author}
                        date={Element.publishedAt}
                      />
                    </div>

                  );
                })}
            </div>
          </InfiniteScroll>
        </div>

        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page - 1 <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.previewPage}
          >
            {" "}
            &larr; Preview
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.nextPage}
          >
            next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
