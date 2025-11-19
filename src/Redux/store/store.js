import { configureStore } from "@reduxjs/toolkit";
import { createProductApi } from "../../services/APIQuery/createProductApi";

export const store = configureStore({
    reducer: {
        [createProductApi.reducerPath]: createProductApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(createProductApi.middleware)
})