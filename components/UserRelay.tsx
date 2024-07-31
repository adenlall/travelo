import { UserRelayFragment$key } from "__generated__/UserRelayFragment.graphql";
import { graphql, useFragment } from "react-relay";

const UserRelayFragment = graphql`
  fragment UserRelayFragment on User {
      id
      name
      email
  }`;

export default function UserRelay(props:{
  user:UserRelayFragment$key|null|undefined
}) {
  const user = useFragment(UserRelayFragment, props.user);
  return <div style={{background:'black', color:'white'}}>
    <h1>user name : {user?.name}</h1>
    <p>user email : {user?.email}</p>
  </div>
}