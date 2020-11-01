import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const selectDirectoryCollection = createSelector(
    [selectDirectory],
    (directory) => directory.collection,
);