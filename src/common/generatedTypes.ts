import { ResolverFn } from './customTypes';
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GenreModel } from '../modules/Genres/genre.model';
import { MovieModel } from '../modules/Movies/movie.model';
import { DirectorModel } from '../modules/Directors/director.model';
import { ActorModel } from '../modules/Actors/actor.model';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export { ResolverFn };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Rate: any;
}

export enum Gender {
  Male = 'male',
  Female = 'female'
}

export interface Person {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  birthName?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  birthPlace?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
}

export interface Info {
  __typename?: 'Info';
  totalDocs?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
}

export interface Actor extends Person {
  __typename?: 'Actor';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  birthName?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  birthPlace?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  nicknames?: Maybe<Array<Maybe<Scalars['String']>>>;
  heightCentimeters?: Maybe<Scalars['Int']>;
  movies?: Maybe<Array<Maybe<Movie>>>;
}

export interface ActorInput {
  name: Scalars['String'];
  birthName?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  birthPlace?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  nicknames?: Maybe<Array<Maybe<Scalars['String']>>>;
  heightCentimeters?: Maybe<Scalars['Int']>;
  movies?: Maybe<Array<Maybe<Scalars['ID']>>>;
}

export interface Actors {
  __typename?: 'Actors';
  results?: Maybe<Array<Maybe<Actor>>>;
  info?: Maybe<Info>;
}

export interface Query {
  __typename?: 'Query';
  actor?: Maybe<Actor>;
  actors?: Maybe<Actors>;
  director?: Maybe<Director>;
  directors?: Maybe<Directors>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  movie?: Maybe<Movie>;
  movies?: Maybe<Movies>;
}

export interface QueryActorArgs {
  id: Scalars['ID'];
}

export interface QueryActorsArgs {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}

export interface QueryDirectorArgs {
  id: Scalars['ID'];
}

export interface QueryDirectorsArgs {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}

export interface QueryMovieArgs {
  id: Scalars['ID'];
}

export interface QueryMoviesArgs {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}

export interface Mutation {
  __typename?: 'Mutation';
  createActor?: Maybe<Actor>;
  createDirector?: Maybe<Director>;
  createGenre?: Maybe<Genre>;
  createMovie?: Maybe<Movie>;
}

export interface MutationCreateActorArgs {
  actor?: Maybe<ActorInput>;
}

export interface MutationCreateDirectorArgs {
  director?: Maybe<DirectorInput>;
}

export interface MutationCreateGenreArgs {
  genre?: Maybe<GenreInput>;
}

export interface MutationCreateMovieArgs {
  movie?: Maybe<MovieInput>;
}

export interface Director extends Person {
  __typename?: 'Director';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  birthName?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  birthPlace?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  movies?: Maybe<Array<Maybe<Movie>>>;
}

export interface DirectorInput {
  name: Scalars['String'];
  birthName?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  birthPlace?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  movies?: Maybe<Array<Maybe<Scalars['ID']>>>;
  genres?: Maybe<Array<Maybe<Scalars['ID']>>>;
}

export interface Directors {
  __typename?: 'Directors';
  results?: Maybe<Array<Maybe<Director>>>;
  info?: Maybe<Info>;
}

export interface Genre {
  __typename?: 'Genre';
  id: Scalars['ID'];
  type: Scalars['String'];
  movies?: Maybe<Array<Maybe<Movie>>>;
}

export interface GenreInput {
  type: Scalars['String'];
}

export enum Language {
  English = 'english',
  Spanish = 'spanish',
  Portuguese = 'portuguese',
  German = 'german',
  French = 'french',
  Chinese = 'chinese'
}

export interface Movie {
  __typename?: 'Movie';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['Date']>;
  releaseYear?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  originalLanguage?: Maybe<Language>;
  dubbingLanguages?: Maybe<Array<Maybe<Language>>>;
  rating?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Int']>;
  genre?: Maybe<Genre>;
  actors?: Maybe<Array<Maybe<Actor>>>;
  director?: Maybe<Director>;
}

export interface MovieInput {
  title: Scalars['String'];
  releaseDate?: Maybe<Scalars['Date']>;
  releaseYear?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  originalLanguage?: Maybe<Language>;
  dubbingLanguages?: Maybe<Array<Maybe<Language>>>;
  rating?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Int']>;
  genre?: Maybe<Scalars['ID']>;
}

export interface Movies {
  __typename?: 'Movies';
  results?: Maybe<Array<Maybe<Movie>>>;
  info?: Maybe<Info>;
}

export interface AdditionalEntityFields {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Date: ResolverTypeWrapper<Scalars['Date']>;
  GENDER: Gender;
  Person: ResolversTypes['Actor'] | ResolversTypes['Director'];
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Info: ResolverTypeWrapper<Info>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Actor: ResolverTypeWrapper<ActorModel>;
  ActorInput: ActorInput;
  Actors: ResolverTypeWrapper<Omit<Actors, 'results'> & { results?: Maybe<Array<Maybe<ResolversTypes['Actor']>>> }>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Director: ResolverTypeWrapper<DirectorModel>;
  DirectorInput: DirectorInput;
  Directors: ResolverTypeWrapper<
    Omit<Directors, 'results'> & { results?: Maybe<Array<Maybe<ResolversTypes['Director']>>> }
  >;
  Genre: ResolverTypeWrapper<GenreModel>;
  GenreInput: GenreInput;
  Rate: ResolverTypeWrapper<Scalars['Rate']>;
  LANGUAGE: Language;
  Movie: ResolverTypeWrapper<MovieModel>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  MovieInput: MovieInput;
  Movies: ResolverTypeWrapper<Omit<Movies, 'results'> & { results?: Maybe<Array<Maybe<ResolversTypes['Movie']>>> }>;
  AdditionalEntityFields: AdditionalEntityFields;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Date: Scalars['Date'];
  Person: ResolversParentTypes['Actor'] | ResolversParentTypes['Director'];
  ID: Scalars['ID'];
  String: Scalars['String'];
  Info: Info;
  Int: Scalars['Int'];
  Actor: ActorModel;
  ActorInput: ActorInput;
  Actors: Omit<Actors, 'results'> & { results?: Maybe<Array<Maybe<ResolversParentTypes['Actor']>>> };
  Query: {};
  Mutation: {};
  Director: DirectorModel;
  DirectorInput: DirectorInput;
  Directors: Omit<Directors, 'results'> & { results?: Maybe<Array<Maybe<ResolversParentTypes['Director']>>> };
  Genre: GenreModel;
  GenreInput: GenreInput;
  Rate: Scalars['Rate'];
  Movie: MovieModel;
  Float: Scalars['Float'];
  MovieInput: MovieInput;
  Movies: Omit<Movies, 'results'> & { results?: Maybe<Array<Maybe<ResolversParentTypes['Movie']>>> };
  AdditionalEntityFields: AdditionalEntityFields;
  Boolean: Scalars['Boolean'];
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<
  Result,
  Parent,
  ContextType,
  Args
>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = AbstractEntityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EntityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = { overrideType?: Maybe<Scalars['String']> };

export type ColumnDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ColumnDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {};

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<
  Result,
  Parent,
  ContextType,
  Args
>;

export type LinkDirectiveArgs = { overrideType?: Maybe<Scalars['String']> };

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<
  Result,
  Parent,
  ContextType,
  Args
>;

export type EmbeddedDirectiveArgs = {};

export type EmbeddedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EmbeddedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = { path: Scalars['String'] };

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<
  Result,
  Parent,
  ContextType,
  Args
>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type PersonResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']
> = {
  __resolveType: TypeResolveFn<'Actor' | 'Director', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birthPlace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['GENDER']>, ParentType, ContextType>;
};

export type InfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Info'] = ResolversParentTypes['Info']
> = {
  totalDocs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prevPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Actor'] = ResolversParentTypes['Actor']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birthPlace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['GENDER']>, ParentType, ContextType>;
  nicknames?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  heightCentimeters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  movies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Movie']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActorsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Actors'] = ResolversParentTypes['Actors']
> = {
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Actor']>>>, ParentType, ContextType>;
  info?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  actor?: Resolver<Maybe<ResolversTypes['Actor']>, ParentType, ContextType, RequireFields<QueryActorArgs, 'id'>>;
  actors?: Resolver<Maybe<ResolversTypes['Actors']>, ParentType, ContextType, RequireFields<QueryActorsArgs, never>>;
  director?: Resolver<
    Maybe<ResolversTypes['Director']>,
    ParentType,
    ContextType,
    RequireFields<QueryDirectorArgs, 'id'>
  >;
  directors?: Resolver<
    Maybe<ResolversTypes['Directors']>,
    ParentType,
    ContextType,
    RequireFields<QueryDirectorsArgs, never>
  >;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['Genre']>>>, ParentType, ContextType>;
  movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMovieArgs, 'id'>>;
  movies?: Resolver<Maybe<ResolversTypes['Movies']>, ParentType, ContextType, RequireFields<QueryMoviesArgs, never>>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createActor?: Resolver<
    Maybe<ResolversTypes['Actor']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateActorArgs, never>
  >;
  createDirector?: Resolver<
    Maybe<ResolversTypes['Director']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateDirectorArgs, never>
  >;
  createGenre?: Resolver<
    Maybe<ResolversTypes['Genre']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateGenreArgs, never>
  >;
  createMovie?: Resolver<
    Maybe<ResolversTypes['Movie']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateMovieArgs, never>
  >;
};

export type DirectorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Director'] = ResolversParentTypes['Director']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birthPlace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['GENDER']>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['Genre']>>>, ParentType, ContextType>;
  movies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Movie']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectorsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Directors'] = ResolversParentTypes['Directors']
> = {
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Director']>>>, ParentType, ContextType>;
  info?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenreResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Movie']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Rate'], any> {
  name: 'Rate';
}

export type MovieResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  releaseYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalLanguage?: Resolver<Maybe<ResolversTypes['LANGUAGE']>, ParentType, ContextType>;
  dubbingLanguages?: Resolver<Maybe<Array<Maybe<ResolversTypes['LANGUAGE']>>>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes['Genre']>, ParentType, ContextType>;
  actors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Actor']>>>, ParentType, ContextType>;
  director?: Resolver<Maybe<ResolversTypes['Director']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoviesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Movies'] = ResolversParentTypes['Movies']
> = {
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Movie']>>>, ParentType, ContextType>;
  info?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Person?: PersonResolvers<ContextType>;
  Info?: InfoResolvers<ContextType>;
  Actor?: ActorResolvers<ContextType>;
  Actors?: ActorsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Director?: DirectorResolvers<ContextType>;
  Directors?: DirectorsResolvers<ContextType>;
  Genre?: GenreResolvers<ContextType>;
  Rate?: GraphQLScalarType;
  Movie?: MovieResolvers<ContextType>;
  Movies?: MoviesResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
import { MongooseId } from './customTypes';
export type PersonDbInterface = {
  _id: MongooseId;
  name?: Date;
  birthName?: Maybe<string>;
  birthDate?: Maybe<any>;
  birthPlace?: Maybe<string>;
  gender?: Maybe<string>;
  type: string;
};

export type ActorDbObject = PersonDbInterface & {
  nicknames?: Maybe<Array<Maybe<string>>>;
  heightCentimeters?: Maybe<number>;
};

export type DirectorDbObject = PersonDbInterface & {
  genres?: Maybe<Array<Maybe<GenreDbObject['_id']>>>;
};

export type GenreDbObject = {
  _id: MongooseId;
  type: string;
  movies?: Maybe<Array<Maybe<MovieDbObject['_id']>>>;
};

export type MovieDbObject = {
  _id: MongooseId;
  title?: Maybe<string>;
  releaseDate?: Date;
  releaseYear?: Maybe<number>;
  description?: Maybe<string>;
  shortDescription?: Maybe<string>;
  originalLanguage?: Maybe<string>;
  dubbingLanguages?: Maybe<Array<Maybe<string>>>;
  rating?: Maybe<number>;
  duration?: Maybe<number>;
  genre?: Maybe<GenreDbObject['_id']>;
  actors?: Maybe<Array<Maybe<ActorDbObject['_id']>>>;
  director?: Maybe<DirectorDbObject['_id']>;
};
