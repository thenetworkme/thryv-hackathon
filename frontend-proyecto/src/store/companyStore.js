import { create } from "zustand";

export const useCompanyStore = create((set) => ({
  company: null,
  setCompany: (company) => {
    set({ company });
  },
}));
