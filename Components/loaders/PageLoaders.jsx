import React from 'react'

const PageLoader = ({ loader }) => {
    return (
        <div className={loader}>
            <div className="spinner"></div>
        </div>
    )
}

export default PageLoader