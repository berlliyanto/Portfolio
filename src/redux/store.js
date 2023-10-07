import { configureStore } from '@reduxjs/toolkit'
import  darkModeReducer  from './slice/darkMode'

const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
    },
})

const firstState = store.getState()
console.log('On Store' , firstState)

store.subscribe(() => {
    console.log('On Subscribe',store.getState())
})

export default store