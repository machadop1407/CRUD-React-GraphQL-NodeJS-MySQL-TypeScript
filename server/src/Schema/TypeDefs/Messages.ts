import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";

export const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});
