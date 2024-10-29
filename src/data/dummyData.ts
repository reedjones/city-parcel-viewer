export const dummyParcels = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        id: '1',
        address: '123 Main St',
        owner: 'John Doe',
        assessedValue: 450000,
        yearBuilt: 1985,
        sqft: 2200,
        zoning: 'Residential',
        images: [
          'https://images.unsplash.com/photo-1518780664697-55e3ad937233',
          'https://images.unsplash.com/photo-1449844908441-8829872d2607',
        ],
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-122.4194, 37.7749],
          [-122.4184, 37.7749],
          [-122.4184, 37.7739],
          [-122.4194, 37.7739],
          [-122.4194, 37.7749],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: '2',
        address: '456 Oak Ave',
        owner: 'Jane Smith',
        assessedValue: 675000,
        yearBuilt: 1992,
        sqft: 2800,
        zoning: 'Residential',
        images: [
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
          'https://images.unsplash.com/photo-1416331108676-a22ccb276e35',
        ],
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-122.4184, 37.7749],
          [-122.4174, 37.7749],
          [-122.4174, 37.7739],
          [-122.4184, 37.7739],
          [-122.4184, 37.7749],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: '3',
        address: '789 Pine St',
        owner: 'Robert Johnson',
        assessedValue: 825000,
        yearBuilt: 2001,
        sqft: 3200,
        zoning: 'Mixed Use',
        images: [
          'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09',
          'https://images.unsplash.com/photo-1484154218962-a197022b5858',
        ],
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-122.4174, 37.7749],
          [-122.4164, 37.7749],
          [-122.4164, 37.7739],
          [-122.4174, 37.7739],
          [-122.4174, 37.7749],
        ]],
      },
    },
  ],
};