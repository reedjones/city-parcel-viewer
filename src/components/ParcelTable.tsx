import { Table } from 'lucide-react';
import { ParcelData } from '../types';

interface ParcelTableProps {
  parcels: ParcelData[];
  onParcelClick: (parcel: ParcelData) => void;
}

export default function ParcelTable({ parcels, onParcelClick }: ParcelTableProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b flex items-center space-x-2">
        <Table className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Parcels List</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year Built</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sq Ft</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zoning</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {parcels.map((parcel) => (
              <tr key={parcel.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm">{parcel.address}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{parcel.owner}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">${parcel.assessedValue.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{parcel.yearBuilt}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{parcel.sqft.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{parcel.zoning}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => onParcelClick(parcel)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}