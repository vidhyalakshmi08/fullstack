import React from 'react'
import PropTypes from 'prop-types'
import AdminNav from '../../components/ui/AdminNav'
const AdminLayout = ({children}) => {
  return (
    <div>
    <aside><AdminNav/></aside>
    <main>
        {children}
    </main>
    </div>
  )
}
AdminLayout.propTypes={
  children:PropTypes.node.isRequired,
}
export default AdminLayout