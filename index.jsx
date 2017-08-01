import React from 'react';
import { createStore } from 'redux';
const store = createStore(fn);
const state = store.getState();
const action = {
    type: 'ADD_TODO',
    payload: 'Learn Redux'
};
