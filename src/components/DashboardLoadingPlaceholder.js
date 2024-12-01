import React from 'react'

const DashboardLoadingPlaceholder = () => {
  return (
    <div className="placeholder-container text-center p-5 bg-light rounded">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default DashboardLoadingPlaceholder
