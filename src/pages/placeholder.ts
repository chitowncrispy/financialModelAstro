import { atom } from 'nanostores';

export const singletonCartOpen = atom(false);

export const isCartOpen = () => {
   return singletonCartOpen.get();
}

export const customSetCartOpen = (cartOpen) => {
   singletonCartOpen.set(cartOpen);
   console.log("placeholderSet: " + singletonCartOpen.get());
}