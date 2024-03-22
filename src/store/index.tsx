import axios from "axios";
import {create} from "zustand";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainLayout from "pages/MainLayout";
import ticketPage from "pages/TicketPage";

export interface IState {
    data: [],
    loading: boolean,
    hasErrors: boolean,
    fetch?:any,
    copiedData:any,
    copyData?:any,
    order:[],
    routes?:any,

}

const initialState :IState = {
    data: [],
    loading: false,
    hasErrors: false,
    copiedData:[],
    order:[],

    // routes:[]

}


const useStore = create<IState>((set, get) => ({
    ...initialState,
    data: [],
    loading: false,
    hasErrors: false,
    copiedData:[],
    order:[],
    // routes:[
    //     { path: '/', component: MainLayout },
    //     { path: '/ticket', component: ticketPage },
    // ],


    fetch: async () => {
        set(() => ({ loading: true }));
        try {
            const response = await axios.get(
                "https://65faa5a63909a9a65b1b056e.mockapi.io/ticket"
            );
            set((state:IState) => ({ data: (state.data = response.data), loading: false }));
        } catch (err) {
            set(() => ({ hasErrors: true, loading: false }));
        }
    },



    copyData: () => {
        set((state:IState) => ({ copiedData: (state.data) }));
    },

    sortByPrice() {
        const filterByPrice = get().data.sort((a:any, b:any) => a.price - b.price )
        set({ data: filterByPrice })
    },

    sortByFlightTime() {
        const filterByPrice = get().data.sort((a:any, b:any) => a.timeInFlight - b.timeInFlight )
        set({ data: filterByPrice })
    },

    sortByTransferNumBy0() {
        const filterByTransferNum:any = [...get().data.filter((t:any) =>  t.numOfTransfers === 0 )]
        set({ copiedData: filterByTransferNum })
    },

    sortByTransferNumBy1() {
        const filterByTransferNum1:any = [...get().data.filter((t:any) =>  t.numOfTransfers === 1 )]
        set({ copiedData: filterByTransferNum1 })
    },

    sortByTransferNumBy2() {
        const filterByTransferNum2:any = [...get().data.filter((t:any) =>  t.numOfTransfers === 2 )]
        set({ copiedData: filterByTransferNum2 })
    },

    sortByTransferNumBy3() {
        const filterByTransferNum3:any = [...get().data.filter((t:any) =>  t.numOfTransfers == 3 )]
        set({ copiedData: filterByTransferNum3 })
    },
    reset: () => {
        set((state:IState) => ({ copiedData: (state.data) }));
    },

}));

useStore.getState().fetch()
useStore.getState().copyData()



export default useStore;
