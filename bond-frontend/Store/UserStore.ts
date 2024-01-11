import { create } from 'zustand';

const data = JSON.parse(localStorage.getItem('bond_user') || '{}');
console.log(data);

export default const useStore = create((set) => ({
  //   bears: {},
  current_bond_user: () => set(() => ({ bears: data })),
}));
