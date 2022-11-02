const jobs = [
  {
    img: "https://pbs.twimg.com/media/E7FU3kzVkAEezcz?format=jpg&name=small",
    name: "Joe Mama",
    cg: "6.9",
  },
  {
    img: "https://pbs.twimg.com/media/E7FU3kzVkAEezcz?format=jpg&name=small",
    name: "Joe Mama",
    cg: "6.9",
  },
  {
    img: "https://pbs.twimg.com/media/E7FU3kzVkAEezcz?format=jpg&name=small",
    name: "Joe Mama",
    cg: "6.9",
  },
];

export default function Contact() {
  return (
    <div className="Candidates">
      <div className="heading">
        <h1>Applications</h1>
      </div>
      <div className="Filter">
        <label for="criteria">Filter By:</label>
        <select name="criteria" id="criteria">
          <option value="CPI">CPI</option>
          <option value="PHD">PHD</option>
          <option value="HIREABILITY">HIREABILITY</option>
        </select>
      </div>
      <div className="JobD">
        {jobs.map((job) => {
          const { img, name, cg } = job;
          return (
            <div className="Jobcard">
              <div className="Data">
                <h1> Name-{name}</h1>
                <h2> CPI-{cg}</h2>
              </div>
              <div className="pic">
                <img src={img} width="200" height="100"></img>
                <button className="btn">View</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
