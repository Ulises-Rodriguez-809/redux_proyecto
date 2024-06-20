import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
    },
    reducers: {
        // guardar usuario en el apartado usuarios
        saveUser: (state, action) => {
            // const {name, lastname, city, country} = action.payload;
            state.users.push(action.payload);
        },
        replaceOneUser: (state, action) => {
            const {index, newUser} = action.payload;

            state.users.splice(index, 1, newUser);
            // state.users[divIndex] = newUser
        },
        // eliminar un usuario
        deleteUser: (state, action) => {
            state.users.splice(action.payload, 1);
        },
        resetState: (state) => {
            state.users = [];
        },
    }
});

export const userSliceHire = createSlice({
    name: "usersHire",
    initialState: {
        users: []
    },
    reducers: {
        addUserHire: (state, action) => {
            state.users.push(action.payload);
        },
        deleteUserHire: (state, action) => {
            state.users.splice(action.payload, 1);
        },
        selectDepartamento: (state, action) => {
            const { departamento, index } = action.payload;

            state.users[index].departamento = departamento;
        }
    }
})

export const { saveUser, replaceOneUser, resetState, deleteUser } = userSlice.actions;
export const { addUserHire, deleteUserHire, selectDepartamento } = userSliceHire.actions;