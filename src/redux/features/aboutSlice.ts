import { createSlice } from "@reduxjs/toolkit";

export interface AboutState {
    seeMore: boolean,
    seeMore2: boolean,
    seeMore3: boolean,
    seeMore4: boolean,
    seeLess: boolean,
    seeLess2: boolean,
    seeLess3: boolean,
    seeLess4: boolean
}

const initialState = {
        seeMore: false,
        seeMore2: false,
        seeMore3: false,
        seeMore4: false,
        seeLess: true,
        seeLess2: true,
        seeLess3: true,
        seeLess4: true,
} 

export const about = createSlice({
    name: 'about',
    initialState,
    reducers: {
        setSeeMore1: (state) => {
            state.seeMore = !state.seeMore
            state.seeLess = !state.seeLess
        },
        setSeeMore12: (state) => {
            state.seeMore2 = !state.seeMore2
            state.seeLess2 = !state.seeLess2
        },
        setSeeMore13: (state) => {
            state.seeMore3 = !state.seeMore3
            state.seeLess3 = !state.seeLess3
        },
        setSeeMore14: (state) => {
            state.seeMore4 = !state.seeMore4
            state.seeLess4 = !state.seeLess4
        },
        setSeeMoreAll: (state) => {
            state.seeMore = true
            state.seeMore2 = true
            state.seeMore3 = true
            state.seeMore4 = true
            state.seeLess = false
            state.seeLess2 = false
            state.seeLess3 = false
            state.seeLess4 = false
        }
    }
})

export const { setSeeMore1, setSeeMore12, setSeeMore13, setSeeMore14, setSeeMoreAll } = about.actions
export default about.reducer