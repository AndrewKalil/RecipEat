import React, {useEffect, useState, Component} from 'react';
import ReactPaginate from 'react-paginate';
import PopOutCard from "./components/PopOutCard"
import { CardDeck } from 'react-bootstrap';
import QueueItems from "./components/subComponents/QueueComponent"
import axios from "axios"
import "./css/myResultPage.css";


export default function ResPage() {
    const APP_ID = "a2799540"
    const APP_KEY = "f7e5e87ff82ab6a8b20afe314169bdde"

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("")
    const [listItems, setList] = useState([])


    useEffect(() => {
        const savedData = localStorage.getItem('query')
        if (savedData) {
            setQuery(JSON.parse(savedData))
        }
    }, [])

    useEffect(() => {
        getRecipes()
        window.scrollTo(0, 0)
        localStorage.setItem('query', JSON.stringify(query))
    }, [query])

    const getRecipes = async () => {
        const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${0}&to=${10}`)
        setRecipes(response.data.hits)
        console.log(response.data.hits)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch("")
        saveData("ingredientList", listItems)
        setList([])
    }

    const saveData = (name, data) => {
        localStorage.setItem(name, JSON.stringify(data))
    }

    const addItem = e => {
        e.preventDefault()
        const newItem = search
        if (newItem) {
            const newItems=[...listItems, newItem]
            setList(newItems)
        }
        setSearch("")
    }
    const deleteItem = (key) => {
        const filteredItems = listItems.filter(item =>
            item !== key)
            setList(filteredItems)
    }

    const setUpdate = (text, key) => {
        const items = listItems
        items.map((item) => {
            if (item.index === key) {
                item.item = text
            }
            setList(items)
        })
    }

    return (
        <div className="myRpage">
            <div className="formDiv">
                    <form
                        className="search-form"
                        onSubmit={getSearch}
                        >
                            <input
                                type="text"
                                placeholder="Search recipe"
                                autoComplete="off"
                                onChange={updateSearch}
                                value={search}
                                />
                            <button
                                onClick={addItem}
                                className="addButton"
                            >Add</button>
                            <input
                                type="submit"
                                value="search"/>
                    </form>
                    <div>
                        <QueueItems
                        items={listItems}
                        deleteItem={deleteItem}
                        setUpdate={setUpdate}
                        />
                    </div>
            </div>
            <CardDeck className="myCardDeck">
                {recipes.map((item, index) =>
                    <PopOutCard
                    key = {index}
                    label = {item.recipe.label}
                    image = {item.recipe.image}
                    totalTime = {item.recipe.totalTime}
                    source = {item.recipe.source}
                    ingredients= {item.recipe.ingredientLines}
                    saveData = {saveData}
                />)}
            </CardDeck>
        </div>
    )
}





// export default class ResPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             offset: 0,
//             data: [],
//             perPage: 30,
//             currentPage: 0,
//             query: "",
//             length: 0,
//             //search: ""
//         };
//         this.handlePageClick = this.handlePageClick.bind(this);
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.saveData = this.saveData.bind(this)
//         this.getData = this.getData.bind(this)
//     }

//     componentDidMount() {
//         window.scrollTo(0, 0)
//         this.receivedData()
//     }


//     receivedData() {
//         this.setState({query: this.getData('query')})

//         const APP_ID = "a2799540"
//         const APP_KEY = "f7e5e87ff82ab6a8b20afe314169bdde"
//         const url = `https://api.edamam.com/search?q=${get}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${0}&to=${10}`

//         axios
//             .get(url)
//             .then(res => {

//                 const data = res.data;
//                 const slice = data.hits.slice(this.state.offset, this.state.offset + this.state.perPage)
//                 const postData = slice.map((pd, index) => <PopOutCard
//                     key = {index}
//                     label = {pd.recipe.label}
//                     image = {pd.recipe.image}
//                     totalTime = {pd.recipe.totalTime}
//                     source = {pd.recipe.source}
//                     ingredients= {pd.recipe.ingredientLines}
//                     saveData = {this.saveData}
//                 />)
//                 this.setState({
//                     length: data.hits.length
//                 })
//                 console.log(data)

//                 this.setState({
//                     pageCount: Math.ceil(data.hits.length / this.state.perPage),

//                     postData,
//                 })
//             });
//     }

//     handlePageClick(e) {
//         const selectedPage = e.selected;
//         const offset = selectedPage * this.state.perPage;

//         this.setState({
//             currentPage: selectedPage,
//             offset: offset
//         }, () => {
//             this.receivedData()
//         });

//     }

//     handleChange(e) {
//         this.setState({
//             query: e.target.value
//         })
//     }

//     handleSubmit(e) {
//         // e.preventDefault()
//         this.receivedData()
//         this.saveData('query', this.state.query)
//     }

//     saveData(name, data) {
//         localStorage.setItem(name, JSON.stringify(data))
//     }

//     getData (name) {
//         const savedData = typeof(localStorage.getItem(name)) === String? localStorage.getItem(name) : JSON.parse(localStorage.getItem(name))
//         if (savedData) {
//             return savedData
//         }
//         else {
//             return null
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <div className="myRpage">
//                     <div className="formDiv">
//                         <form
//                             className="search-form"
//                             onSubmit={this.handleSubmit}>
//                             <input
//                                 type="text"
//                                 placeholder="Search recipe"
//                                 autoComplete="off"
//                                 onChange={this.handleChange}
//                                 value={this.state.search}
//                                 />
//                             <input
//                                 type="submit"
//                                 value="search"/>
//                         </form>
//                     </div>
//                     {this.state.length > 0?
//                     <div className="myPagination">
//                         <ReactPaginate
//                             previousLabel={"prev"}
//                             nextLabel={"next"}
//                             breakLabel={"..."}
//                             breakClassName={"break-me"}
//                             pageCount={this.state.pageCount}
//                             marginPagesDisplayed={2}
//                             pageRangeDisplayed={5}
//                             onPageChange={this.handlePageClick}
//                             containerClassName={"pagination"}
//                             subContainerClassName={"pages pagination"}
//                             activeClassName={"active"}/>
//                     </div>
//                     : ""}
//                     <CardDeck className="myCardDeck">
//                         {this.state.postData}
//                     </CardDeck>
//                 </div>
//             </div>

//         )
//     }
// }