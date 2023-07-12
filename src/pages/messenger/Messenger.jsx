import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import 'bootstrap/dist/css/bootstrap.css';
import Conversations from '../conversations/Conversations'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'

const Messenger = () => {
  return (
    <>
        <Topbar/>
        <div className='d-flex h-100'>
            <div className="p-2 flex-grow-1">
                <div className="h-100 p-2">
                    <input placeholder="Cerca amici" type="text" className='form-control mb-2 border-0 border-bottom border-gray' />
                    <Conversations/>
                    <Conversations/>
                    <Conversations/>
                    <Conversations/>
                </div>
            </div>
            <div className="p-2 flex-grow-1">
            <div className="h-100 p-2 d-flex flex-column justify-content-between">
                <div className="overflow-auto pr-2">
                    <Message/>
                    <Message own={true}/> {/* alternato perché c'è chat */}
                    <Message/><Message/>
                    <Message own={true}/> {/* alternato perché c'è chat */}
                    <Message/><Message/>
                    <Message own={true}/> {/* alternato perché c'è chat */}
                    <Message/>
                </div>
                <div className="mt-2 d-flex align-items-center justify-content-between">
                    <textarea className="form-control rounded p-2 flex-grow-1" placeholder="Scrivi qualcosa..." name="chatMessageInput" id="chatMessageInput" cols="60" rows="10">

                    </textarea>
                    <button className="btn btn-danger mx-4 text-white" style={{width: '70px', height: '40px'}}>Invia</button>
                </div>

            </div>

            </div>
            <div className="p-2 flex-grow-1">
            <div className="h-100 p-2">
                <ChatOnline/>
                <ChatOnline/>
                <ChatOnline/>
                <ChatOnline/>
            </div>

            </div>

        </div>
    </>
  )
}

export default Messenger
