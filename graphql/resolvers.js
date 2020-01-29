import { people, getById, deletMovie } from "./db";
import { movies, getByIdMovie, addMovie} from "./db";

const resolvers = {
    Query: {
        movies: () => movies,
        movie:(_, {id}) => getByIdMovie(id),
        people: () => people,
        person:(_, {id}) => getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deletMovie(id)
    }
};

export default resolvers;




