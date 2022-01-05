import React from 'react'
import { ApiData } from './ApiData';
import MovieList from './MovieList';
import SearchBox from './SearchBox';
import SortBox from './SortBox';

export default class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            data: ApiData,
            searchData: '',
            sortData: ''
        }
    }

    handleSearch = async (value) => {
        await this.setState({searchData:value});
        
    }
    handleSort = async (value) => {
        await this.setState({sortData: value});
        if(this.state.sortData === 'Title_Z-A'){
            const sortedData = this.state.data.sort(function (a,b) {return b.Title-a.Title});
            await this.setState({data: sortedData});
            console.log(value);
        }
    }
 
    render() {
        let filteredMovies = this.state.data.filter((movie) => {
            const reg = new RegExp(this.state.searchData, 'gi');
            return reg.test(movie.Title) || reg.test(movie.Director) || reg.test(movie.Genre) || reg.test(movie.Actors) || reg.test(movie.Plot)
        })
        return (<>
            <div className='search-sort-container'>
            <SearchBox handleSearch={this.handleSearch}/> 
            <SortBox handleSort={this.handleSort}/>
            </div>     
            <MovieList data={filteredMovies}/>
        </>)
    }
}
