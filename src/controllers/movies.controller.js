const {Sequelize} = require('sequelize');
const Op = Sequelize.Op;
const Movie = require('../models/Movie')


const getMovies = (req,res) =>{
    Movie.findAll()
    .then((response)=> res.json(response))
    .catch((err)=> res.status(400).json(err))
}

const createMovie = (req,res) =>{
    Movie.create(req.body)
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>res.status(400).send(err))
}
const getMovieById = async (req,res) => {
    const {id} = req.params;
    const movie = await Movie.findByPk(id);
    if(movie===null){
        res.status(400).send('Not Found!');
    }else{
        res.status(200).json(movie);
    }
}
const getMoviesByName= async(req,res) =>{
    const { name } = req.params;
    const movies = await Movie.findAll(  { where:{ name :{ [Op.like]: `%${name}%` } }   }   )
    if(movies===null){
        res.status(400).send('Not Found!');
    }else{
        res.status(200).json(movies);
    }
   
}
const getMoviesByGenre = async(req,res) =>{
    const { genre } = req.params;
    const movies = await Movie.findAll(  { where:{ genre : genre}   }   )
    if(movies===null){
        res.status(400).send('Not Found!');
    }else{
        res.status(200).json(movies);
    }
   
}
const deleteMovieById = (req, res) =>{
    const {id} = req.params;
    Movie.destroy( { where: { id : id } } )
    .then(()=> res.status(200).send('Successfully Deleted'))
    .catch((err) => res.status(400).send('Movie could not be deleted'))
}
const updateNameMovieById = async (req, res) =>{
    const {id} = req.params;
    const {name, year, director, genre, lead_actor} = req.body;
    if(name && year && director && genre && lead_actor){
       Movie.update(
            { name:name,
              year: year,
              director:director,
              genre:genre,
              lead_actor: lead_actor },
            { where: { id : id } }
        )
        .then((movie) => {
            res.status(200).json(movie);
        }).catch((err) => res.status(400).json('Movie could not be updated ',err))
    }else{
        res.status(401).json('Could not update the movie, you must enter the data to update')
    }
    
}
const getMoviesByDirectorName = async(req,res)=>{
    const { director } = req.params;
    const movies = await Movie.findAll(  { where:{ director :{ [Op.like]: `%${director}%` } }   }   )
    if(movies===null){
        res.status(400).send('Not Found!');
    }else{
        res.status(200).json(movies);
    }
}

const getMoviesByActorName = async(req, res) =>{
    const { actor } = req.params;
    const movies = await Movie.findAll(  { where:{ lead_actor :{ [Op.like]: `%${actor}%` } }   }   )
    if(movies===null){
        res.status(400).send('Not Found!');
    }else{
        res.status(200).json(movies);
    }
}


module.exports = {
    getMovies,
    createMovie,
    getMovieById,
    getMoviesByName,
    getMoviesByGenre,
    deleteMovieById,
    updateNameMovieById,
    getMoviesByDirectorName,
    getMoviesByActorName
}