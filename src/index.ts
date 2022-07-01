import { loadFiles } from "@graphql-tools/load-files";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import express from 'express';
import { ApolloServer} from 'apollo-server-express'
import dotenv from 'dotenv';
import {artistsResolver, genresResolver, albumsResolver, tracksResolver} from './modules/resolvers';
import {ArtistsService, GenresService, AlbumsService, TracksService} from './modules/services'

async function startApolloServer(){
  dotenv.config();
  const port = process.env.PORT;
  const app = express();

  const server = new ApolloServer({
    typeDefs: await loadFiles("src/**/*.graphql"),
    resolvers: [artistsResolver, genresResolver, albumsResolver, tracksResolver],
    csrfPrevention: true,
    cache: "bounded",
    dataSources: () => {
      return {
        artistsService: new ArtistsService(),
        genresService: new GenresService(),
        albumsService: new AlbumsService(),
        tracksService: new TracksService()
      };
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await server.start();
  server.applyMiddleware({app, path: "/graphql"});
  app.listen({ port }, () => {
    console.log(`Server is running at http://localhost:3000${server.graphqlPath}`);
  })
}


startApolloServer()