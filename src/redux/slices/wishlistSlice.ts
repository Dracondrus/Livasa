"use client";

import { IFeaturedPropertyDT } from "@/types/property-d-t";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

interface WishlistState {
  wishlistProducts: IFeaturedPropertyDT[];
}

const initialState: WishlistState = {
  wishlistProducts: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggle_wishlist: (state = initialState, { payload }: PayloadAction<IFeaturedPropertyDT>) => {
      if (!state.wishlistProducts) {
        state.wishlistProducts = []; 
      }
      const existingIndex = state.wishlistProducts.findIndex(
        (item) => item.id === payload.id
      );
    
      if (existingIndex >= 0) {
        state.wishlistProducts.splice(existingIndex, 1);
        toast.warning("Product removed from Wish list");
      } else {
        state.wishlistProducts.push(payload);
        toast.success("Product added to Wish list");
      }
    },
    remove_wishlist_product: (
      state,
      { payload }: PayloadAction<IFeaturedPropertyDT>
    ) => {
      const toastId = toast.loading("");
      state.wishlistProducts = state.wishlistProducts.filter(
        (item) => item.id !== payload.id
      );
      toast.error(`Remove from your wishlist`, { id: toastId, duration: 1000 });
    },
  },
});

export const { toggle_wishlist, remove_wishlist_product } = wishlistSlice.actions;
export default wishlistSlice.reducer;

