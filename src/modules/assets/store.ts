import { defineStore } from "pinia"
import type { Asset } from "./types"

export const useAssetStore = defineStore("assets", {
  state: () => ({
    assets: [] as Asset[],
    loading: false,
  }),
  actions: {
    async fetchAssets() {
      this.loading = true
      // TEMP mock data
      this.assets = [
        {
          id: "1",
          name: "Dell Laptop",
          type: "PHYSICAL",
          category: "IT Equipment",
          purchaseDate: "2024-01-10",
          cost: 1200,
          location: "HQ",
          department: "IT",
          status: "ACTIVE",
        },
      ]
      this.loading = false
    },
  },
})
