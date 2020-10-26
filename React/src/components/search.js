import React, { Component } from 'react';
import axios from 'axios';
import PopOutCard from "../components/PopOutCard";
import ResPage from "../ResPage";
import '../css/styles.scss';
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        offset: 0,
        data: [],
        perPage: 30,
        currentPage: 0,
        query: "",
        length: 0,
        //search: ""
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

receivedData() {
    const APP_ID = "a2799540"
    const APP_KEY = "f7e5e87ff82ab6a8b20afe314169bdde"
    const url = `https://api.edamam.com/search?q=${this.state.query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${0}&to=${100}`

    axios
        .get(url)
        .then(res => {

            const data = res.data;
            const slice = data.hits.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map(pd => <PopOutCard
                key={pd.recipe.label}
                label = {pd.recipe.label}
                img = {pd.recipe.image}
                time = {pd.recipe.totalTime}
                source = {pd.recipe.source}
                ingredients= {pd.recipe.ingredientLines}
            />)
            this.setState({
                length: data.hits.length
            })
            console.log(data)

            this.setState({
                pageCount: Math.ceil(data.hits.length / this.state.perPage),

                postData,
            })
        });
}

handlePageClick(e) {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });

}

componentDidMount() {
    this.receivedData()
}

handleChange(e) {
    this.setState({
        query: e.target.value
    })
}

handleSubmit(e) {
    e.preventDefault()
    //this.setState({query: this.state.search})
    this.receivedData()
}
  render() {
	  return (
          <div className="search">
            <form onSubmit={this.handleSubmit}>
              <div className="nav-box">
                <div className="box-ico">
                <svg class="ico-search" height="16" width="16" viewBox="0 0 24 24" role="img">
                  <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 
                    2.69 6 6-2.69 6-6 6m13.12 2.88l-4.26-4.26A9.842 
                    9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 
                    10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 
                    4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24">
                  </path>
                </svg>
                </div>
                <div className="sear-in">
                  <input type="text" className="input-search" name="SearchInput" placeholder="Search" 
                  width="100%" height="100%" onChange={this.handleChange}
                  value={this.state.search}/>
                </div>
                <Link to="/result" type="submit">
                    <input type="submit" value="search" />
                </Link>
                {console.log(this.state.search)}
              </div>
              </form>
              <ResPage ResultSearch={this.state.postData} />
          </div> 
	  );
  }
}

export default Search;