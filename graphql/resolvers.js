import { people, getById } from "./db";
import { movies, getByIdMovie} from "./db";

const resolvers = {
    Query: {
        movies: () => movies,
        movie:(_, {id}) => getByIdMovie(id),
        people: () => people,
        person:(_, {id}) => getById(id)


    }
};

export default resolvers;




