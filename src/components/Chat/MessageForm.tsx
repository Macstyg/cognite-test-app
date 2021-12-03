import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { createMessage, sendMessage } from '../../features/chat/messages.slice'
import { selectActiveRoom } from '../../features/chat/rooms.slice'

const MessageForm: React.FC = () => {
    const [messageText, setMessageText] = useState('')
    const dispatch = useAppDispatch()
    const activeRoomId = useAppSelector(selectActiveRoom)

    const handleSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
        const message = createMessage(messageText)
        dispatch(sendMessage({ message, activeRoomId }))
        setMessageText('')
    }

    const handleMessageChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setMessageText(e.target.value)
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                'display': 'flex',
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField onChange={handleMessageChange} value={messageText} id="text" name="text" label="Message" variant="outlined" />
            <Button type="submit" variant="contained">Send</Button>
        </Box>
    )
}

export default MessageForm
