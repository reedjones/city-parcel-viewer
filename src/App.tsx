import { useState } from 'react';
import Map from './components/Map';
import ParcelModal from './components/ParcelModal';
import ParcelTable from './components/ParcelTable';
import { ParcelData } from './types';
import { Map as MapIcon } from 'lucide-react';
import { dummyParcels } from './data/dummyData';

function App() {
  const [selectedParcel, setSelectedParcel] = useState<ParcelData | null>(null);

  const parcels = dummyParcels.features.map(f => f.properties as ParcelData);

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center space-x-3">
          <MapIcon className="w-6 h-6 text-blue-600" />
          <h1 className="text-xl font-semibold">City Parcel Viewer</h1>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-6 space-y-6 bg-gray-50">
        <Map onParcelClick={setSelectedParcel} />
        <ParcelTable 
          parcels={parcels}
          onParcelClick={setSelectedParcel}
        />
        <ParcelModal
          parcel={selectedParcel}
          onClose={() => setSelectedParcel(null)}
        />
      </main>
    </div>
  );
}

export default App;