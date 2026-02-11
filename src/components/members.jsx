import { fifthMembers } from "../data/fifthMembers";
import MembersCard from "./MembersCard";
import "../styles/members.css";

export default function Members({ generation }) {
  let members = [];

  if (generation === 5) members = fifthMembers;

  return (
    <div className="member-list">
      {members.map((member) => (
        <MembersCard key={member.id} {...member} />
      ))}
    </div>
  );
}

