import Plan from "./Plan";
import Capital from "./Capital";
import { memo, useCallback, useEffect, useState } from "react";
//import { getServerSideProps } from "./Exchange";
import { getTransactions } from "../apis/api";
import { Skeleton } from "@material-ui/lab";
import { useRef } from "react";

const DashboardHome = ({ user, handleModal }) => {
    const [recent, setRecent] = useState()
    const [mounted, setmounted] = useState(true)
    const userData = useRef(user ? user.user ? user.user._id : '' : '')
    const controller = useRef()
    let handleRecent = (transactions) => {

        return transactions.length > 3 ? transactions.slice(-3) : transactions;


    }



    const fetchData = useCallback(async () => {

        if (controller.current) {

            controller.current.abort("cancelling and unmounting")
        }

        controller.current = new AbortController();

        let signal = controller.current.signal;
        try {
            if (mounted) {

                const res = await getTransactions(userData.current, signal)
                if (res && !res.error && res.data) {
                    let transactionsData = res.data.payload
                    setRecent(handleRecent(transactionsData))
                    return;
                }

                setRecent()
                return;
            }

        } catch (err) {
            console.log(err)
        }
    }, [mounted])

    useEffect(() => {

        fetchData()

        return () => {
            setmounted(false)
            if (controller.current) {

                controller.current.abort("cancelling and creating new request")
            }
        }

    }, [fetchData])
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

                        {recent ?
                            recent.length > 0 ? (recent).map(
                                (transaction, index) => {

                                    return (
                                        <div className="recent_transaction" key={index + transaction.value + (Math.random() * 100 + 100)}>
                                            <div className={transaction.type === 'Debit' ? 'loss' : transaction.type === 'Credit' ? 'gain' : 'profit-text'}>{transaction.type === 'Debit' ? `-${transaction.value}` : `+${transaction.value}`}</div>
                                            <div className={transaction.status}>{transaction.status}</div>
                                            <div className="recent_transaction_type">{transaction.updatedAt}</div>
                                        </div>
                                    )

                                }
                            ) : '' : (<Skeleton variant="rect" width={290} height={118} />)}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default memo(DashboardHome)
