import api from './api'

// Get all assets

export const getAssets = async () => {
  const res = await api.get('/assets')
  console.log('Fetched assets:', res)
  return res.data
  
}

// Get single asset by ID
 
export const getAssetById = async (id: string) => {
  const res = await api.get(`/assets/${id}`)
  return res.data
}

// Create new asset
export const createAsset = async (payload: {
  name: string
  type: 'Physical' | 'Soft'
  status: string
  department: string
  assignedTo?: string
  purchaseDate: string
}) => {
  const res = await api.post('/assets', payload)
  return res.data
}


 // Update existing asset
 
export const updateAsset = async (
  id: string,
  payload: Partial<{
    name: string
    type: 'Physical' | 'Soft'
    status: string
    department: string
    assignedTo: string
    purchaseDate: string
  }>
) => {
  const res = await api.put(`/assets/${id}`, payload)
  return res.data
}

//Delete asset
 
export const deleteAsset = async (id: string) => {
  const res = await api.delete(`/assets/${id}`)
  return res.data
}
