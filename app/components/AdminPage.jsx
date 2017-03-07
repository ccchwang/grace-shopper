import React from 'react'
import AdminEditForm from './AdminEditForm'

export default function({ handleInputCheck, inputCheck }) {

  return (
   <div className="admin-main">

     <AdminEditForm
        handleInputCheck={handleInputCheck}
        invalidName={inputCheck.invalidName}
        invalidCategory={inputCheck.invalidCategory}
        invalidDescript={inputCheck.invalidDescript}
        invalidPrice={inputCheck.invalidPrice} />
   </div>
  )
}


