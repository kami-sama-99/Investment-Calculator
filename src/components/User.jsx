export default function Input({ update, data }) {
  return (
    <section id="user-input">
       <div className="input-group">
        <p>
            <label>Initial Investment</label>
            <input
            value={data.initialInvestment}
            type="number"
            onChange={(event) => update('initialInvestment', Number(event.target.value))}
            >
            </input>
        </p>
        <p>
            <label>Annual Investment</label>
            <input
            value={data.annualInvestment}
            type="number"
            onChange={(event) => update('annualInvestment', Number(event.target.value))}
            >
            </input>
        </p>
       </div>
       <div className="input-group">
        <p>
            <label>Expected Return</label>
            <input
            value={data.expectedReturn}
            type="number"
            onChange={(event) => update('expectedReturns', Number(event.target.value))}
            >
            </input>
        </p>
        <p>
            <label>Duration</label>
            <input
            value={data.duration}
            type="number"
            onChange={(event) => update('duration', Number(event.target.value))}
            >
            </input>
        </p>
       </div>
    </section>
  );
}
