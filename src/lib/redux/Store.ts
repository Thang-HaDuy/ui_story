import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/lib/redux/features/counter/CounterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
