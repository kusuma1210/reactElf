import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
 import MovieList from './components/movie/MovieList';
 import MovieListHeading from './components/movie/MovieListHeading';
 import SearchBox from './components/movie/SearchBox';
 //import AddFavourites from './components/movie/AddFavourites';
 import RemoveFavourites from './components/movie/RemoveFavourites';
import AddFavourite from './components/movie/AddFavorites';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		
		// http://www.omdbapi.com/?i=tt3896198&apikey=abead914
		// const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
const url=`	http://www.omdbapi.com/?s=${searchValue}&apikey=abead914`
		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);
			if (movieFavorites){
		
		setFavourites(movieFavourites)
	}
	}, []);

	

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>

				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
			
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
	);
};

export default App;

// import logo from './logo.svg';
// import './App.css';
// import Login from './components/form/Login';
// import Table from './components/form/Table';
// import EmployeList from './components/form/EmployeList';

// function App() {
//   return (
//     <div className="App">
//     {/* <Table/> */}
//     <EmployeList/>
  
//     </div>
//   );
// }

// export default App;
