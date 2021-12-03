import { List } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectActiveRoomMessageIds } from '../../features/chat/rooms.slice'
import ChatMessageItem from './ChatMessageItem'

const ChatMessages: React.FC = () => {
    const ids = useAppSelector(selectActiveRoomMessageIds)
    return (
        <List dense sx={{
            minHeight: 'calc(100% - 72px)'
        }}>
            {ids.map(id => <ChatMessageItem key={id} id={id} />)}
        </List>
    )
}

export default ChatMessages