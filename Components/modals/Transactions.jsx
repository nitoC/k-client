import { useEffect, useState, memo, useCallback } from "react";
import { getTransactions } from "../../apis/api";


const Transactions = ({ click, modal }) => {
  const [trans, setTrans] = useState('')
  let userId = localStorage.getItem('userId')




  const fetchTransaction = useCallback(async () => {
    try {

      const response = await getTransactions(JSON.parse(userId));
      let newTransactions = response.data.payload.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      setTrans(newTransactions);
    } catch (err) {
      console.log("error", err);
    };
  }, [userId]);

  useEffect(() => {
    fetchTransaction()
  }, [fetchTransaction])
  return (
    <div className="modal_transaction">
      <div
        className="wrapT"
        onClick={click.removetransactions}
        style={modal.modalT}
      ></div>
      <div className="transaction_table">
        <table className="wrap-transaction" style={modal.transactions}>
          <thead >
            <tr className="trans" >
              <th className="tans_table_header">Type</th>
              <th className="tans_table_header">Amount</th>
              <th className="tans_table_header">Status</th>
              <th className="tans_table_header">Time</th>
            </tr>
          </thead>
          <tbody>
            {trans ? trans.map((item, b) => {
              return (
                <tr className="trans" key={b + item.value + Math.random()}>
                  <td className='transaction_type'>{item.type}</td>
                  <td className={item.type}>{item.type === 'Debit' ? `-${item.value}` : `+${item.value}`}</td>
                  <td className={item.status}>{item.status}</td>
                  <td className='transaction_time'>{item.updatedAt}</td>
                </tr>
              );
            }) : <tr><td></td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default memo(Transactions);