// src/composables/useAssets.ts
import { ref } from 'vue'

export interface Asset {
  id: string
  name: string
  type: 'Physical' | 'Soft'
  status: 'Active' | 'Assigned' | 'Maintenance' | 'Retired'
  department: string
  assignedTo: string
  purchaseDate: string
}

const assets = ref<Asset[]>([
  {
    id: 'A001',
    name: 'Laptop Dell XPS',
    type: 'Physical',
    status: 'Active',
    department: 'IT',
    assignedTo: 'John Doe',
    purchaseDate: '2025-12-01',
  },
  {
    id: 'A002',
    name: 'Adobe CC License',
    type: 'Soft',
    status: 'Assigned',
    department: 'Design',
    assignedTo: 'Jane Smith',
    purchaseDate: '2025-11-10',
  },
  {
    id: 'A003',
    name: 'Projector Epson',
    type: 'Physical',
    status: 'Maintenance',
    department: 'HR',
    assignedTo: 'N/A',
    purchaseDate: '2024-09-15',
  },
])

export const useAssets = () => {
  const addAsset = (asset: Asset) => {
    assets.value.push(asset)
  }

  const updateAsset = (updated: Asset) => {
    const index = assets.value.findIndex(a => a.id === updated.id)
    if (index !== -1) assets.value[index] = updated
  }

  const deleteAsset = (id: string) => {
    assets.value = assets.value.filter(a => a.id !== id)
  }

  const getAssetById = (id: string) => {
    return assets.value.find(a => a.id === id)
  }

  return {
    assets,
    addAsset,
    updateAsset,
    deleteAsset,
    getAssetById,
  }
}
