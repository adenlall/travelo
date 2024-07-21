import { User } from '@prisma/client';
import { createPubSub } from 'graphql-yoga';
// eslint-disable-next-line import/no-relative-packages

export enum MutationType {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED',
}

export interface PubSubEvent {
  mutationType: MutationType;
}

export interface PubSubUserEvent extends PubSubEvent {
  user: User;
}


export interface PuSubEvents
  extends Record<string, [number | string, PubSubEvent] | [PubSubEvent]> {
  user: [number | string, PubSubUserEvent];
  users: [PubSubUserEvent];
}

export const pubsub = createPubSub<PuSubEvents>({});