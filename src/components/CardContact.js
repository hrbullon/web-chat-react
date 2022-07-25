import React from 'react'
import { Link } from 'react-router-dom'

export const CardContact = ({ contact }) => {

  return (
    <div className="card mt-2">
        <div className="card-body">
            <div className="row">
                <div className="col-4">
                    <img src={ contact.profile } className="img-thumbnail-profile" alt="imgaen-profile"/>
                </div>
                <div className="col-8">
                <h6><Link to={ `/chat/${contact.code}`}>{ contact.name }</Link></h6>
                <p>{ contact.text }</p>
                </div>
            </div>
        </div>
    </div>
  )
}
