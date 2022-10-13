import './App.css';

function App() {
  const MY_KEY = process.env.REACT_APP_KEY;
	const MY_ID = process.env.REACT_APP_ID;

	const exampleReq = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${MY_ID}}&app_key=${MY_KEY}&diet=balanced`

  return (
    <div className='App'>
      <form className="search-form">
				<input className='search-bar' type="text" />
				<button className='search-button' type="submit">Search</button>
			</form>
    </div>
  );
}

export default App;
