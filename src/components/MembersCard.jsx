 function MembersCard({ name, major, role, tag, image }) {
  return (
    <div className="member-card">
      <img src={image} alt={name} />

      <div className="overlay">
        <h3>{name}</h3>
        <p className="major">{major}</p>
        <p className="role">{role}</p>
        <div className="tag">#{tag}</div>
      </div>
    </div>
  );
}

export default MembersCard