function HostCard({hostInfo}) {
  const {username, profileImage, id} = hostInfo
  return (
    <div className="host-card">
      <img src={profileImage}/>
      <h2>{username}</h2>
    </div>
  );
}

export default HostCard;