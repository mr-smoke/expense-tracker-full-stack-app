import { mergeResolvers } from "@graphql-tools/merge";
import useResolver from "./user.resolver.js";
import transactionResolver from "./transaction.resolver.js";

const mergedResolvers = mergeResolvers([useResolver, transactionResolver]);

export default mergedResolvers;
