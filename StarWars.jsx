import { Component } from "react"
import { Container, Row, Col, Spinner } from 'react-bootstrap'

  const API="http://www.omdbapi.com/?apikey=b3987125&s=Star Wars"
class StarWars extends Component{
state ={
    isLoading: true, 
    error: null,
    coverFilm: []
}

    listFilm = () => {
        this.setState({ isLoading: true, error: null })
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
                isLoading: false,
            })
        })
        .catch((e) =>{
            console.log("Errore!", e)
            this.setState({
                isLoading: false,
                error: e.message,
              })
        })
    }
    componentDidMount(){
        console.log("sono component did mount")
        this.listFilm()
    }
    render() {
        if (this.state.isLoading) {
          return (
            <Container fluid className="d-flex justify-content-center align-items-center vh-100">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Caricamento in corso...</span>
              </Spinner>
            </Container>
          );
        }
    
        return (
          <Container fluid>
            <Row>
              <h2 className="text-center mt-4 mb-4">Star Wars</h2>
              {this.state.coverFilm.map((movie) => (
                <Col xs={12} md={6} lg={2} className="d-flex justify-content-center">
                  <img
                    key={movie.imdbID}
                    src={movie.Poster}
                    alt={movie.Title}
                    style={{ width: '200px', height: 'auto', margin: '5px' }}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        );
      }
    }
    export default StarWars