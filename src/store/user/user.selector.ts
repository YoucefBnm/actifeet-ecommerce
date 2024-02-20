import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user

export const selectCurrentUser = createSelector(
    [selectUserReducer],
    userSlice => userSlice.currentUser
)

export const selectLoading = createSelector(
    [selectUserReducer],
    userSlice => userSlice.loading
)

export const selectError = createSelector(
    [selectUserReducer],
    userSlice => userSlice.error
)

export const selectCheckUserSession = createSelector(
    [selectUserReducer],
    userSlice => userSlice.isChecking
)