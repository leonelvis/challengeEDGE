const {Router} = require('express');
const router = Router();


const {getMovies, createMovie, getMovieById, getMoviesByName, getMoviesByGenre, deleteMovieById, updateNameMovieById, getMoviesByDirectorName, getMoviesByActorName} = require('../controllers/movies.controller');

/**
 * @swagger
 * definitions:
 *  Movie:
 *   properties:
 *    name:
 *     type: string
 *     description: nombre de la pelicula
 *     example: 'Titanic'
 *    year:
 *     type: integer 
 *     description: año de la pelicula
 *     example: 1997
 *    director:
 *     type: string
 *     description: director de la pelicula
 *     example: 'James Cameron'
 *    genre:
 *     type: string
 *     description: genero de la pelicula
 *     example: 'Action'
 *    lead_actor:
 *     type: string
 *     description: actor principal de la pelicula
 *     example: 'Leonardo di Caprio'
 */


/**
 * @swagger
 * /movies:
 *  post:
 *   summary: create movie
 *   description: create a new movie 
 *   tags:
 *    - Movies
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Movie'
 *   responses:
 *    200:
 *     description: movie created succesfully
 *    500:
 *     description: failure creating movie
 */

 router.post('/movies', createMovie);

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: get all movies
 *     tags:
 *       - Movies
 *     description: Returns all movies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of movies
 *         schema:
 *           $ref: '#/definitions/Movie'
 */
router.get('/movies', getMovies);

/**
 * @swagger
 * /movies/{id}:
 *  get:
 *   summary: get movie by id
 *   tags:
 *    - Movies
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the movie
 *      example: 1
 *   responses:
 *    200:
 *     description: success
 * 
 */

router.get('/movies/:id', getMovieById);

/**
 * @swagger
 * /movies/movie/{name}:
 *  get:
 *   summary: get movie by name
 *   tags:
 *    - Movies
 *   parameters:
 *    - in: path
 *      name: name
 *      schema:
 *       type: string
 *      required: true
 *      description: name of the movie
 *      example: 'Titanic'
 *   responses:
 *    200:
 *     description: success
 * 
 */
 router.get('/movies/movie/:name', getMoviesByName);

/**
* @swagger
* /movies/genre/{genre}:
*  get:
*   summary: get movie by genre
*   tags:
*    - Movies
*   parameters:
*    - in: path
*      name: genre
*      schema:
*       type: string
*      required: true
*      description: genre of the movie
*      example: 'Action'
*   responses:
*    200:
*     description: success
* 
*/
router.get('/movies/genre/:genre', getMoviesByGenre);
  
/**
* @swagger
* /movies/director/{director}:
*  get:
*   summary: get movies by director
*   tags:
*    - Movies
*   parameters:
*    - in: path
*      name: director
*      schema:
*       type: string
*      required: true
*      description: director of the movie
*      example: 'James Cameron'
*   responses:
*    200:
*     description: success
* 
*/
router.get('/movies/director/:director', getMoviesByDirectorName)
  
  
 /**
 * @swagger
 * /movies/actor/{lead_actor}:
 *  get:
 *   summary: get movie by principal actor
 *   tags:
 *    - Movies
 *   parameters:
 *    - in: path
 *      name: lead_actor
 *      schema:
 *       type: string
 *      required: true
 *      description: principal actor of the movie
 *      example: 'Leonardo di Caprio'
 *   responses:
 *    200:
 *     description: success
 * 
 */
router.get('/movies/actor/:actor', getMoviesByActorName);
  
 /**
 * @swagger
 * /movies/{id}:
 *  put:
 *   summary: update a movie
 *   tags:
 *    - Movies
 *   description: update a movie
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the movie
 *      example: 1
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      schema: 
 *       $ref: '#/definitions/Movie'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref:  '#/definitions/Movie'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref:  '#/definitions/Movie'
 */
router.put('/movies/:id', updateNameMovieById);
 
 /**
 * @swagger
 * /movies/{id}:
 *  delete:
 *   summary: delete movie
 *   tags:
 *    - Movies
 *   description: delete movie
 *   parameters: 
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the movie
 *      example: 1
 *   responses:
 *    200:
 *     description: success 
 */
  
  router.delete('/movies/:id', deleteMovieById);

 

module.exports = router;