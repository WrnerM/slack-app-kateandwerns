import React from 'react'
import CreateChannel from './CreateChannel'
import AllChannels from './AllChannels'
import ChannelDetails from './ChannelDetails'
import AddMember from './AddMember'

const Channels = ({ headers, users }) => {
  return (
    <div>
      <CreateChannel headers={headers} users={users}/>
      <AllChannels headers={headers} />
      <ChannelDetails headers={headers} />
      <AddMember headers={headers} />
    </div>
  )
}

export default Channels
