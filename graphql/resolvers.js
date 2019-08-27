import { people } from "./db";  
  
const resolvers = {
    Query: {
        person: () => people
    }
};

export default resolvers;
