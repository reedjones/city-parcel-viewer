export interface ParcelData {
  id: string;
  address: string;
  owner: string;
  assessedValue: number;
  yearBuilt: number;
  sqft: number;
  zoning: string;
  images: string[];
  coordinates: [number, number];
}

export interface ProcessStatus {
  status: 'idle' | 'processing' | 'completed' | 'error';
  progress: number;
  message: string;
}