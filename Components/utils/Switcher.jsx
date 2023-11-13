import React from 'react'
import DashboardHome from '../DashboardHome'
import Referal from '../Referal'
import Settings from '../Settings'
import Exchange from '../Exchange'
import News from '../News'
import Market from '../Market'

const Switcher = ({ element, type, users, handlers }) => {
    console.log(element, type.includes(element), type)
    if (element === "Home" && type.includes(element)) {
        return (
            <DashboardHome user={users} handleModal={handlers.handleModal} />
        )

    }
    if (element === "News" && type.includes(element)) {
        return (
            <News />
        )

    }
    if (element === "Settings" && type.includes(element)) {
        return (
            <Settings />
        )

    }
    if (element === "Referral" && type.includes(element)) {
        return (
            <Referal id={users.user._id} />
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
}

export default Switcher