import { configureStore } from '@reduxjs/toolkit';
import { userSlice, userSliceHire } from './slices';

export default configureStore({
    reducer: {
        users: userSlice.reducer,
        usersHire: userSliceHire.reducer,
    }
})