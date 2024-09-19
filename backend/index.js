import const { ApolloServer } from ("@apollo/server");
import const { startStandaloneServer } from ("@apollo/server/standalone");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);
