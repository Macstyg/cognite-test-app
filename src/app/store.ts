import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import messagesReducer from '../features/chat/messages.slice';
import roomsReducer from '../features/chat/rooms.slice';

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    rooms: roomsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
