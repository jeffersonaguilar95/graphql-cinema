import { Document, DocumentQuery } from 'mongoose';
import { GraphQLResolveInfo } from 'graphql';

export type MongooseId = Document['_id'];

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | DocumentQuery<TResult, any> | TResult;
