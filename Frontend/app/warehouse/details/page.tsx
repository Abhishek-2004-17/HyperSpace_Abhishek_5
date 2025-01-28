import { SideBar } from '@/components/warehouse/SideBar';
import React from 'react';

const details: React.FC = () => {
  return (
    <>
      <SideBar />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-8">
          {/* Container 1 */}
          <div
            data-containers2
            className="w-3/4 bg-blue-100 p-6 border-2 border-blue-400 rounded-lg shadow-lg text-center"
          >
            <p>Warehouse 1: Warehouse 1 location.</p>
          </div>

          {/* Container 2 */}
          <div
            data-containers3
            className="w-3/4 bg-blue-100 p-6 border-2 border-blue-400 rounded-lg shadow-lg text-center"
          >
            <p>Warehouse 2: Warehouse 2 location .</p>
          </div>

          {/* Container 3 */}
          <div
            data-containers4
            className="w-3/4 bg-blue-100 p-6 border-2 border-blue-400 rounded-lg shadow-lg text-center"
          >
            <p>Warehouse 3: Warehouse 3 location.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default details;
