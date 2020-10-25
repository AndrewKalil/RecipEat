import React, {Component, useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import PopOutCard from "./components/PopOutCard"
import { CardDeck } from 'react-bootstrap';
import "./css/myResultPage.css";

export default function ResPage() {
    const APP_ID = "a2799540"
    const APP_KEY = "f7e5e87ff82ab6a8b20afe314169bdde"

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("")

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
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${0}&to=${10}`)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(data.hits)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch("")
    }

    return (
        <div className="myRpage">
            <div className="formDiv">
                <form
                    className="search-form"
                    onSubmit={getSearch}>
                    <input
                        type="text"
                        placeholder="Search recipe"
                        autoComplete="off"
                        onChange={updateSearch}
                        value={search}
                        />
                    <input
                        type="submit"
                        value="search"/>
                </form>
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
                />)}
            </CardDeck>
        </div>
    )
}
