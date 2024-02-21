import React from 'react'
import PropTypes from 'prop-types'
const AdminLayout = ({children}) => {
  return (
    <div className='admin_container'>
    <aside>

    </aside>
    <main>
        {children}
    </main>
    </div>
  )
}

export default AdminLayout