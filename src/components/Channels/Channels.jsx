import React from 'react'
import CreateChannel from './CreateChannel'
import AllChannels from './AllChannels'
import ChannelDetails from './ChannelDetails'
import AddMember from './AddMember'

const Channels = ({ headers, filteredUsers, handleSearchChange, searchInput}) => {
  return (
    <div>
      <div>
      <CreateChannel 
        headers={headers} 
        filteredUsers={filteredUsers} 
        searchInput={searchInput} 
        handleSearchChange={handleSearchChange}
      />
      <AllChannels headers={headers} />
      <ChannelDetails headers={headers} />
      <AddMember headers={headers} />
      </div>
    </div>
  )
}

export default Channels
