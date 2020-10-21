import React, {Component} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import PopOutCard from "./components/PopOutCard"
import { CardDeck } from 'react-bootstrap';
import "./css/myResultPage.css";

export default class ResPage extends Component {
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
            <div>
                <div className="myRpage">
                    <div className="formDiv">
                        <form
                            className="search-form"
                            onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                placeholder="Search recipe"
                                autoComplete="off"
                                onChange={this.handleChange}
                                value={this.state.search}
                                />
                            <input
                                type="submit"
                                value="search"/>
                        </form>
                    </div>
                    {this.state.length > 0?
                    <div className="myPagination">
                        <ReactPaginate
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}/>
                    </div>
                    : ""}
                    <CardDeck className="myCardDeck">
                        {this.state.postData}
                    </CardDeck>
                </div>
            </div>

        )
    }
}