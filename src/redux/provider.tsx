"use client";
// import NiceModal from "@ebay/nice-modal-react";
import { store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {/* <NiceModal.Provider> */}
      {children}
      {/* </NiceModal.Provider> */}
      {/* </PersistGate> */}
    </Provider>
  );
}
