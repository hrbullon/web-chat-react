import React from 'react'

export const MessageChat = ({ message }) => {
  return (
    <>
        { message.type === "in" &&
            <div className="msg-in">
                <div className="row">
                    <div className="col-12">{ message.body }</div>
                </div>
            </div>
        }
        { message.type === "out" &&
            <div className="msg-out mt-4">
                <div className="row">
                    <div className="col-12">{ message.body }</div>
                    {/* <div class="col-2"> 
                        <img src={  message.user.profile } className="img-thumbnail-profile" alt="imgaen-profile"/>
                    </div> */}
                </div>
            </div>
        }
    </>
  )
}
