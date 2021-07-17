import React from "react"
import { __ModalContext } from "./dialog-context-provider";


// 
export async function showModal<T=any>(modal: React.ReactNode): Promise<T>{
    // show modal globally
    // return the result of the modal
    return ;
}


export function useModal() {
  const context = React.useContext(__ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a `<ModalContextProvider>`");
  }

  return context;
}
