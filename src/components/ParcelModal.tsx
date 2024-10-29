import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { ParcelData, ProcessStatus } from '../types';
import { ChevronDown, ChevronUp, X, Image as ImageIcon } from 'lucide-react';

interface ParcelModalProps {
  parcel: ParcelData | null;
  onClose: () => void;
}

export default function ParcelModal({ parcel, onClose }: ParcelModalProps) {
  const [showGallery, setShowGallery] = useState(false);
  const [processStatus, setProcessStatus] = useState<ProcessStatus>({
    status: 'idle',
    progress: 0,
    message: '',
  });

  const startProcess = async (processName: string) => {
    setProcessStatus({ status: 'processing', progress: 0, message: `Starting ${processName}...` });
    
    // Simulate process
    for (let i = 0; i <= 100; i += 20) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setProcessStatus({
        status: 'processing',
        progress: i,
        message: `${processName} in progress...`,
      });
    }

    setProcessStatus({
      status: 'completed',
      progress: 100,
      message: `${processName} completed successfully!`,
    });
  };

  if (!parcel) return null;

  return (
    <Transition appear show={!!parcel} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <div className="flex justify-between items-start">
                  <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900">
                    {parcel.address}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="rounded-full p-1 hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Owner</p>
                      <p className="font-medium">{parcel.owner}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Assessed Value</p>
                      <p className="font-medium">${parcel.assessedValue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Year Built</p>
                      <p className="font-medium">{parcel.yearBuilt}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Square Footage</p>
                      <p className="font-medium">{parcel.sqft.toLocaleString()} sq ft</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <button
                      onClick={() => setShowGallery(!showGallery)}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                    >
                      <ImageIcon className="w-4 h-4" />
                      <span>Property Images</span>
                      {showGallery ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    
                    {showGallery && (
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        {parcel.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Property ${index + 1}`}
                            className="rounded-lg object-cover h-48 w-full"
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => startProcess('Tax Assessment')}
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Generate Tax Assessment
                      </button>
                      <button
                        onClick={() => startProcess('Property Report')}
                        className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Generate Property Report
                      </button>
                    </div>

                    {processStatus.status !== 'idle' && (
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>{processStatus.message}</span>
                          <span>{processStatus.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${processStatus.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}