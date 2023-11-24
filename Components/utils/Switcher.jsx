import React from 'react'
import DashboardHome from '../DashboardHome'
import Referal from '../Referal'
import Settings from '../Settings'
import Exchange from '../Exchange'
import News from '../News'
import Market from '../Market'
import Notification from '../Notification'
import Documents from '../Documents'
import Orders from '../Orders'

const Switcher = ({ element, type, users, handlers }) => {

    if (element === "Home" && type.includes(element)) {
        return (
            <DashboardHome user={users} handleModal={handlers.handleModal} />
        )

    }
    if (element === "News") {
        return (
            <News />
        )

    }
    if (element === "Settings") {
        return (
            <Settings />
        )

    }
    if (element === "Referral") {
        return (
            <Referal id={users && users.user && users.user._id} />
        )

    }
    if (element === "Exchange" && type.includes(element)) {
        return (
            <Exchange />
        )

    }
    if (element === "Market" && type.includes(element)) {
        return (
            <Market />
        )

    }
    if (element === "Notifications") {
        return (
            <Notification />
        )

    }
    if (element === "Documents") {
        return (
            <Documents />
        )

    }
    if (element === "Orders") {
        return (
            <Orders />
        )

    }
}

export default Switcher