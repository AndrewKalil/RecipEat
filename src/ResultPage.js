import React, {useState} from 'react'
import Axios from 'axios'
import { CardDeck, Jumbotron } from "react-bootstrap"
import PopOutCard from "./Components/PopOutCard"
//import {v4 as uuidv4} from "uuid"

function ResultPage () {

    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([])
    const [max, setMax] = useState(32)

    const APP_ID = "a2799540"
    const APP_KEY = "f7e5e87ff82ab6a8b20afe314169bdde"
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=${max}`

    const getData = async () => {
        const result = await Axios.get(url)

        console.log(result)
        setQuery("")
        setRecipes(result.data.hits)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        getData()
    }

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    const onClick = (e) => {
        setMax(e.target.value + 32)
    }

    return(
        <div className="myRpage">
            <div className="formDiv">
                <form
                    className="search-form"
                    onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Search recipe"
                        autoComplete="off"
                        onChange={onChange}
                        value={query}
                        />
                    <input
                        type="submit"
                        value="search"/>
                </form>
            </div>
            <CardDeck className="myCardDeck">
                {recipes ?
                    recipes.map(recipe => <PopOutCard
                        label = {recipe.recipe.label}
                        img = {recipe.recipe.image}
                        time = {recipe.recipe.totalTime}/>)
                    : ""}
            </CardDeck>
            <div className="buttonSection">
                {max > 31 ?
                    <button
                        value={max}
                        onClick={onClick}>
                        Next
                    </button>
                    : ""}
            </div>
        </div>
    )
}

export default ResultPage