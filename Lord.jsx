import { Component } from "react"
  const API="http://www.omdbapi.com/?apikey=b3987125&s=Star Wars"
class Lord  extends Component{
state ={
    coverFilm: []
}

    listFilm = () => {
        fetch(API)
        .then((resp) =>{
            if(resp.ok){
return resp.json()
            } else{
                throw new Error("Errore nella chiamata!")
            }
        })
        .then(data =>{
            console.log(data)
            this.setState({
                coverFilm: data.Search, 
            })
        })
        .catch((e) =>{
            console.log("Errore!", e)
        })
    }
    componentDidMount(){
        console.log("sono component did mount")
        this.listFilm()
    }
    render() {
        return(
            <div >
       
          <div>
            
            {this.state.coverFilm.map((movie) => (
                <img
                  key={movie.imdbID}
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ width: '200px', height: 'auto', margin: '10px' }}
                />
              ))}

           
          
           
          </div>
        
      </div>
        )
    }

}
export default Lord