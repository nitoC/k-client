import Plan from "./Plan";
import Capital from "./Capital";

const DashboardHome = ({ user, handleModal }) => {
    let recentTransactions = user.user.transactions.slice(-3);
    console.log(recentTransactions)
    return (
        <div className="dashboard_home">
            <div className="dashboard_wrapper">
                <Plan plan={user.plan} modal={handleModal} />
                <Capital user={user} />
                <div className="recent">
                    <div className="recent_heading_wrapper">
                        <h3 className="recent_heading">
                            Recent Transactions
                        </h3>
                    </div>
                    <div className="recent_transactions">

                        {(recentTransactions).map(
                            (transaction, index) => {
                                console.log(transaction)
                                return (
                                    <div className="recent_transaction" key={transaction.time + index + transaction.value}>
                                        <div className={transaction.value < 0 ? 'loss' : transaction.vale > 0 ? 'gain' : 'profit-text'}>{transaction.value}</div>
                                        <div>{transaction.text}</div>
                                        <div>{transaction.time}</div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome