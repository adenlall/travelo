/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  DurationType: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
  /** Links contains Website URL, Twitter Username and list of Links */
  Links: { input: any; output: any; }
};

export type Address = Node & {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lat?: Maybe<Scalars['Float']['output']>;
  location: Location;
  long?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
};

export type Location = Node & {
  __typename?: 'Location';
  addresses: LocationAddressesConnection;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  profiles: LocationProfilesConnection;
  state?: Maybe<Scalars['String']['output']>;
  trips: LocationTripsConnection;
};


export type LocationAddressesArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type LocationProfilesArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  oldestFirst?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LocationTripsArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  oldestFirst?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LocationAddressesConnection = {
  __typename?: 'LocationAddressesConnection';
  edges: Array<Maybe<LocationAddressesConnectionEdge>>;
  pageInfo: PageInfo;
};

export type LocationAddressesConnectionEdge = {
  __typename?: 'LocationAddressesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Address;
};

export type LocationInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type LocationProfilesConnection = {
  __typename?: 'LocationProfilesConnection';
  edges: Array<Maybe<LocationProfilesConnectionEdge>>;
  pageInfo: PageInfo;
};

export type LocationProfilesConnectionEdge = {
  __typename?: 'LocationProfilesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Profile;
};

export type LocationTripsConnection = {
  __typename?: 'LocationTripsConnection';
  edges: Array<Maybe<LocationTripsConnectionEdge>>;
  pageInfo: PageInfo;
};

export type LocationTripsConnectionEdge = {
  __typename?: 'LocationTripsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Trip;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress: Address;
  createLocation: Location;
  createTrip: Trip;
  createUser: User;
  deleteAddress: Address;
  deleteLocation: Location;
  deleteTrip: Trip;
  deleteUser: User;
  editAddress: Address;
  editLocation: Location;
  editTrip: Trip;
};


export type MutationCreateAddressArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  locationId: Scalars['ID']['input'];
  long?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  postalCode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateLocationArgs = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  profileId?: InputMaybe<Scalars['ID']['input']>;
  state: Scalars['String']['input'];
  tripId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateTripArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  tagline?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteAddressArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLocationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTripArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationEditAddressArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lat?: InputMaybe<Scalars['Float']['input']>;
  long?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  postalCode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditLocationArgs = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditTripArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Profile = {
  __typename?: 'Profile';
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Location;
  user: User;
};

export type Query = {
  __typename?: 'Query';
  Address: Array<Address>;
  Location: Array<Location>;
  Profile: Array<Profile>;
  Trip: Array<Trip>;
  Users: Array<User>;
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type Trip = {
  __typename?: 'Trip';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location: Location;
  title: Scalars['String']['output'];
  users?: Maybe<Array<User>>;
};

export type TripsOnUsers = {
  __typename?: 'TripsOnUsers';
  assignedAt: Scalars['Date']['output'];
  assignedBy: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  trip: Trip;
  user: User;
};

export type User = {
  __typename?: 'User';
  description?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Profile>;
  tagline?: Maybe<Scalars['String']['output']>;
  tripOnCity?: Maybe<Scalars['String']['output']>;
  trips: UserTripsConnection;
};


export type UserTripOnCityArgs = {
  city: Scalars['String']['input'];
};


export type UserTripsArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type UserTripsConnection = {
  __typename?: 'UserTripsConnection';
  edges: Array<Maybe<UserTripsConnectionEdge>>;
  pageInfo: PageInfo;
};

export type UserTripsConnectionEdge = {
  __typename?: 'UserTripsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: TripsOnUsers;
};

export type MainViewQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MainViewQueryQuery = { __typename?: 'Query', Users: Array<{ __typename?: 'User', name?: string | null }> };

export type TripQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TripQueryQuery = { __typename?: 'Query', Trip: Array<{ __typename?: 'Trip', id: string, title: string, description?: string | null, location: { __typename?: 'Location', city: string, state?: string | null, country: string } }> };

export type HelloUserQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloUserQuery = { __typename?: 'Query', Users: Array<{ __typename?: 'User', name?: string | null }> };


export const MainViewQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MainViewQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<MainViewQueryQuery, MainViewQueryQueryVariables>;
export const TripQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TripQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Trip"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]}}]} as unknown as DocumentNode<TripQueryQuery, TripQueryQueryVariables>;
export const HelloUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HelloUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<HelloUserQuery, HelloUserQueryVariables>;