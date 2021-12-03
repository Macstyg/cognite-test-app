import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, ListItemSecondaryAction } from '@mui/material'
import React, { memo } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectMessageById } from '../../features/chat/messages.slice'
import { ID } from '../../types'

interface Props {
    id: ID
}

const ChatMessageItem: React.FC<Props> = ({ id }) => {
    const message = useAppSelector((state) => selectMessageById(state, id))

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Avatar" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary={message.createdBy}
                secondary={
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {message.text}
                    </Typography>
                }
            />
            <ListItemSecondaryAction>
                <Typography variant="caption">
                    {message.createdAt.toLocaleTimeString()}
                </Typography>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default memo(ChatMessageItem)