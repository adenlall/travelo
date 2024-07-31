// import { graphql } from 'relay-runtime';

// const UserFragment = graphql`
//     fragment UserFragment on User {
//       name
//     }
//   `;

// import { useFragment } from 'react-relay';
// import type { UserFragment$key } from "../__generated__/UserFragment.graphql";

// type Props = {
//   user: UserFragment$key;
// };

// export default function User({ user }: Props) {
//   const data = useFragment(UserFragment, user);
//   return <span>{data.name}</span>
// }