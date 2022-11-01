export default function Admin() {
  return (
    <div className="Admin">
      <h1>Admin View</h1>
      <div className="Form">
        <p>Department: </p>
        <p>Name: </p>
        <p>Round: </p>
        <p>Time:</p>
      </div>
      <div className="Details">
        <div className="info">
          <p>Qualification:</p>
          <p>Specialization:</p>
          <p>CPI (bachelor's):</p>
          <p>CPI (master's):</p>
          <p>Number Of Publications:</p>
          <p>Citations:</p>
          <p>Years of Experience:</p>
          <p>Referred By:</p>
        </div>
        <div className="Photo">
          <img
            src="https://miro.medium.com/max/4800/0*H3jZONKqRuAAeHnG.jpg"
            align="right"
            width="400"
            height="200"
            style={{ marginBottom: 20 }}
          />
          <p>Hireability Score: </p>
        </div>
      </div>

      <div className="NextRound">
        <div className="butt">
          <button className="button">Next Round</button>
          <button className="button">Reject</button>
        </div>
      </div>

      <div className="Schedule">
        <input type="datetime-local" placeholder="time"></input>
        <button className="button">Schedule</button>
      </div>
    </div>
  );
}
