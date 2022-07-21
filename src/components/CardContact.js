import React from 'react'
import { Link } from 'react-router-dom'

export const CardContact = ({ contact }) => {

  return (
    <div class="card mt-2">
        <div class="card-body">
            <div class="row">
                <div class="col-4">
                    <img src={ contact.profile } class="img-thumbnail-profile" alt="imgaen-profile"/>
                </div>
                <div class="col-8">
                <h6><Link to={ `/chat/${contact.code}`}>{ contact.name }</Link></h6>
                <p>{ contact.text }</p>
                </div>
            </div>
        </div>
    </div>
  )
}
