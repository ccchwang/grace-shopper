import React from 'react'
import AdminAddForm from './AdminAddForm'
import AdminEditPage from './AdminEditPage'
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap'

export default function({ handleInputCheck, inputCheck, showAdd, showEdit, handleAddShow, handleEditShow, successfulAdd, products }) {

  return (
   <div className="admin-main">
     <h1>Admin Dashboard</h1>
     <br />
      <ButtonToolbar>
        <DropdownButton bsStyle="info" bsSize="large" title="Manage Products" id="dropdown-size-large">
          <MenuItem eventKey="1" onClick={handleAddShow}>Add a Product</MenuItem>
          <MenuItem eventKey="2" onClick={handleEditShow}>Edit a Product</MenuItem>
        </DropdownButton>

        <DropdownButton bsStyle="info" bsSize="large" title="Manage Users" id="dropdown-size-large">
          <MenuItem eventKey="1">Add a User</MenuItem>
          <MenuItem eventKey="2">Edit a User</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
      <br />

      { showAdd &&
        <AdminAddForm
          handleInputCheck={handleInputCheck}
          invalidName={inputCheck.invalidName}
          invalidCategory={inputCheck.invalidCategory}
          invalidDescript={inputCheck.invalidDescript}
          invalidPrice={inputCheck.invalidPrice}
          successfulAdd={successfulAdd}
        />
      }
      { showEdit &&
        <AdminEditPage />
      }

   </div>
  )
}


