import { List } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectRoomsIds } from '../../features/chat/rooms.slice'
import ChannelListItem from './ChannelListItem'

const ChannelsList: React.FC = () => {
    const ids = useAppSelector(selectRoomsIds)

    return (
        <List>
            {ids.map(id => <ChannelListItem key={id} id={id} />)}
        </List>
    )
}

export default ChannelsList