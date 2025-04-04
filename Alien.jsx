import { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'

  const API="http://www.omdbapi.com/?apikey=b3987125&s=Alien"
class Alien  extends Component{
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
        const alienSaga = this.state.coverFilm.filter((movie) => {
            return movie.Title?.toLowerCase().includes('alien') || movie.Titolo?.toLowerCase().includes('alien');
          })
          const firstSixAlienSaga = alienSaga.slice(0, 6)
        return(
            
       <Container fluid>
          <Row>
          <h2 className="text-center mt-4 mb-4">Alien</h2>
            {firstSixAlienSaga .map((movie) => (
                 <Col xs={12} md={6} lg={2} className="d-flex justify-content-center">
                <img
                  key={movie.imdbID}
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ width: '200px', height: 'auto', margin: '10px' }}
                />
</Col>
              ))}
           
          
</Row>      
         
</Container>
      
        )
    }

}
export default Alien