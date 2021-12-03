import React, { memo } from 'react'
import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';
import { ID } from '../../types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectActiveRoom, selectRoomById, setActiveRoom } from '../../features/chat/rooms.slice';

interface Props {
    id: ID
}

const ChannelListItem: React.FC<Props> = ({ id }) => {
    const room = useAppSelector((state) => selectRoomById(state, id))
    const activeRoom = useAppSelector(selectActiveRoom)
    const isCurrentRoomSelected = activeRoom === id
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(setActiveRoom(id))
    }

    return (
        <ListItem>
            <ListItemButton selected={isCurrentRoomSelected} onClick={handleClick}>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={room.name} secondary={room.createdAt} />
            </ListItemButton>
        </ListItem>
    )
}

export default memo(ChannelListItem)