


const Transactions = ({ click, modal, user }) => {
    let trans;
    if (user.length > 0) {
      trans = user;
    } else {
      trans = [{ value: "", text: "" }];
    }
    return (
      <>
        <div
          className="wrapT"
          onClick={click.removetransactions}
          style={modal.modalT}
        ></div>
        <div className="wrap-transaction" style={modal.transactions}>
          <div className="trans">
            <h2 className="type">type</h2>
            <h2 className="amount-h">amount</h2>
            <h2 className="status-h">status</h2>
            <h2 className="time-h">time</h2>
          </div>
          {trans.map((a, b) => {
            return (
              <div className="trans" key={b}>
                <h3>{a.typeO}</h3>
                <p className="amount">{a.value}</p>
                <p className={a.text}>{a.text}</p>
                <p className="time">{a.time}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  export default Transactions;