import { Grid } from '@mui/material'
import React from 'react'
import ChannelsList from './ChannelsList'
import ChatMessages from './ChatMessages'
import MessageForm from './MessageForm'

const Chat: React.FC = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
                <ChannelsList></ChannelsList>
            </Grid>
            <Grid item xs={6} md={4}>
                <ChatMessages></ChatMessages>
                <MessageForm></MessageForm>
            </Grid>
        </Grid>
    )
}

export default Chat