import React from 'react'

export const References = ({name,cargo,telefono,email}) => {
  return (
    <>
    <div className="reference">
        
            <p>{name}</p>
            <p>{cargo}</p>
            <p>{telefono}</p>
            <p>{email}</p>
        
    </div>
    </>
  )
}
