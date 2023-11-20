import { useEffect, useState, memo, useCallback } from "react";
import { getTransactions } from "../../apis/api";


const Transactions = ({ click, modal }) => {
  const [trans, setTrans] = useState('')
  let userId = localStorage.getItem('userId')



  const fetchTransaction = useCallback(async () => {
    try {

      const response = await getTransactions(JSON.parse(userId));
      console.log(response)
      setTrans(response.data.payload);
    } catch (err) {
      console.log("error", err);
    };
  }, [userId]);

  useEffect(() => {
    fetchTransaction()
  }, [fetchTransaction])
  return (
    <>
      <div
        className="wrapT"
        onClick={click.removetransactions}
        style={modal.modalT}
      ></div>
      <table className="wrap-transaction" style={modal.transactions}>
        <thead className="trans">
          <th className="tans_table_header">Type</th>
          <th className="tans_table_header">Amount</th>
          <th className="tans_table_header">Status</th>
          <th className="tans_table_header">Time</th>
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
          }) : ''}
        </tbody>
      </table>
    </>
  );
};
export default memo(Transactions);