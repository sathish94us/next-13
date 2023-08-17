import { create } from 'zustand';
const useStore = create((set) => ({
 counter: 10,
 increment: () => set((state) => ({ counter: state.counter + 1 })),
 decrement: () => set((state) => ({ counter: state.counter - 1 })),
 }));
export default useStore;