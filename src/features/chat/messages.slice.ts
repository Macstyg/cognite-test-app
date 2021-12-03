import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uniqueId } from 'lodash'
import { RootState } from "../../app/store";
import { ID } from "../../types";

export interface Message {
    id: ID
    text: string
    createdBy: string
    createdAt: Date
}

interface MessagesState {
    byId: Record<ID, Message>,
    ids: ID[]
}

interface SendMessagePayload {
    activeRoomId: ID
    message: Message
}

const initialState: MessagesState = {
    byId: {},
    ids: [],
}

export const createMessage = (text: string): Message => {
    return {
        id: uniqueId(),
        text,
        createdAt: new Date(),
        createdBy: 'Test'
    }
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        messageReceived: (state, { payload }: PayloadAction<Message>) => {
            // Because of Immer we can update state in mutable way.
            state.byId[payload.id] = payload
            state.ids.push(payload.id)
        },
        sendMessage: (state, { payload: { message } }: PayloadAction<SendMessagePayload>) => {
            state.ids.push(message.id)
            state.byId[message.id] = message
        }
    }
})

export const { messageReceived, sendMessage } = messagesSlice.actions
export const selectMessagesById = (state: RootState) => state.messages.byId
export const selectMessagesIds = (state: RootState) => state.messages.ids
export const selectMessageById = createSelector(
    selectMessagesById,
    (_: RootState, messageId: ID) => messageId,
    (messagesById, messageId) => messagesById[messageId]
)

export default messagesSlice.reducer;