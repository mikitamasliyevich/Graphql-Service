import { loadFiles } from "@graphql-tools/load-files";
import { ApolloServerPluginLandingPageGraphQLPlayground, AuthenticationError } from "apollo-server-core";
import express from 'express';
import { ApolloServer} from 'apollo-server-express'
import dotenv from 'dotenv';
import {artistsResolver, genresResolver, albumsResolver, tracksResolver, bandsResolver, usersResolver} from './modules/resolvers';
import {UsersService} from './modules/users/services/users.service'
import {GlobalService} from './modules/globalService'

async function startApolloServer(){
  dotenv.config();
  const port = process.env.PORT;
  const app = express();

  const server = new ApolloServer({
    typeDefs: await loadFiles("src/**/*.graphql"),
    resolvers: [artistsResolver, genresResolver, albumsResolver, tracksResolver, bandsResolver, usersResolver],
    csrfPrevention: true,
    cache: "bounded",
    dataSources: () => {
      return {
        artistsService: new GlobalService(process.env.ARTISTS_URL as string),
        genresService: new GlobalService(process.env.GENRES_URL as string),
        albumsService: new GlobalService(process.env.ALBUMS_URL as string),
        tracksService: new GlobalService(process.env.TRACKS_URL as string),
        bandsService: new GlobalService(process.env.BANDS_URL as string),
        usersService: new UsersService(),
      };
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    context: ({ req }) => {
      const token = req.headers.authorization || ""
      return { token };
    }
  });

  await server.start();
  server.applyMiddleware({app, path: "/graphql"});
  app.listen({ port }, () => {
    console.log(`Server is running at http://localhost:3000${server.graphqlPath}`);
  })
}


startApolloServer()