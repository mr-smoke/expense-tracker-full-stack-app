import { users } from "../data/data.js";

const useResolver = {
  Query: {
    getUsers: async () => {
      return users;
    },
  },
  Mutation: {},
};

export default useResolver;
