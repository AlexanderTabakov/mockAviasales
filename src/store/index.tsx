import axios from "axios";
import {create} from "zustand";
import { devtools } from 'zustand/middleware'
import * as constants from "constants";

export interface IState {
    data: [],
    loading: boolean,
    hasErrors: boolean,
    fetch?:any,
    copiedData:any,
    copyData?:any,
    order:any,
    addOrder?:any,
    removeOrder?:any,
    routes?:any,
    searchItem?:any,
    sendOrder?: any
    totalPrice?:any
    setTotalPrice?:any


}

const initialState :IState = {
    data: [],
    loading: false,
    hasErrors: false,
    copiedData:[],
    order:[],
    totalPrice: 0

    // routes:[]

}




const useStore = create<IState>((set, get) => ({
    ...initialState,
    data: [],
    loading: false,
    hasErrors: false,
    copiedData:[],
    order:[],
    search:[],
    sendOrder: [],
    totalPrice: 0,

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

    addOrder (newOrder:any) {
        const  purchase = [...get().order, newOrder ]
        set({order:purchase})
    },

    removeOrder (id:any) {
        const  removeOrder = [...get().order.filter((t:any)=>t.id!==id) ]
        set({order:removeOrder})
    },


    setTotalPrice () {
        const  totalPrice = get().order.reduce(  (acc:any,b:any) => {
            acc += b.price
            return acc
        }, 0 )
        set({totalPrice:totalPrice})
    },



    sendingOrder () {
        const  sendOrder = [...get().order ]
        set({sendOrder:sendOrder})
        // const send = axios.post и т.д .........
        set({order:[]})

    },


    sortByPrice() {
        const filterByPrice = get().data.sort((a:any, b:any) => a.price - b.price )
        set({ data: filterByPrice })
    },

    sortByFlightTime() {
        const filterByPrice = get().data.sort((a:any, b:any) => a.timeInFlight - b.timeInFlight )
        set({ data: filterByPrice })
    },

    searchItem(searchQuery:any) {
        // if(!searchQuery) {
        //     set((state:IState) => ({ copiedData: (state.data) }));
        // }
        const filterBySearch:any = get().data.filter((t:any) =>  t == searchQuery)
        set({ copiedData: filterBySearch })
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
useStore.getState().setTotalPrice






export default useStore;
