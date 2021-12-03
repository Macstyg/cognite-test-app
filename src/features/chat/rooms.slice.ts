import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ID } from '../../types';
import { sendMessage } from './messages.slice';

export interface Room {
    id: ID
    name: string
    createdAt: string
    createdBy: string
    messageIds: ID[]
}

interface RoomsState {
    byId: Record<ID, Room>
    ids: ID[]
    activeRoom: ID
}

const initialState: RoomsState = {
    byId: {
        '1': {
            id: '1',
            name: 'Andy',
            createdAt: new Date().toISOString(),
            createdBy: 'Test',
            messageIds: []
        },
        '2': {
            id: '2',
            name: 'Marry',
            createdAt: new Date().toISOString(),
            createdBy: 'Test',
            messageIds: []
        },
        '3': {
            id: '3',
            name: 'John',
            createdAt: new Date().toISOString(),
            createdBy: 'Test',
            messageIds: []
        }
    },
    ids: ['1', '2', '3'],
    activeRoom: '1',
}

const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        addRoom: (state, { payload }: PayloadAction<Room>) => {
            state.byId[payload.id] = payload;
            state.ids.push(payload.id);
        },
        setActiveRoom: (state, { payload }: PayloadAction<ID>) => {
            state.activeRoom = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendMessage, (state, { payload: { message, activeRoomId } }) => {
            state.byId[activeRoomId].messageIds.push(message.id)
        })
    }
})

export const { addRoom, setActiveRoom } = roomsSlice.actions

export const selectActiveRoom = (state: RootState) => state.rooms.activeRoom
export const selectRoomsById = (state: RootState) => state.rooms.byId
export const selectRoomsIds = (state: RootState) => state.rooms.ids
export const selectRoomById = createSelector(
    selectRoomsById,
    (_: RootState, roomId: ID) => roomId,
    (roomsById, roomId) => roomsById[roomId]
)
export const selectActiveRoomMessageIds = createSelector(
    selectRoomsById,
    selectActiveRoom,
    (roomsById, roomId) => {
        const room = roomsById[roomId]
        return room?.messageIds || []
    }
)

export default roomsSlice.reducer