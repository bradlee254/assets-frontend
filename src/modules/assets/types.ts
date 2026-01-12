export type AssetStatus =
  | "ACTIVE"
  | "MAINTENANCE"
  | "RETIRED"
  | "LOST"
  | "DISPOSED"

export type AssetType = "PHYSICAL" | "SOFT"

export interface Asset {
  id?: string
  type: AssetType
  name: string
  category: string
  description?: string
  serialNumber?: string
  model?: string
  purchaseDate: string
  cost: number
  supplier?: string
  location: string
  department: string
  assignedTo?: string
  status: AssetStatus
}
