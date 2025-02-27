import React from 'react';
import { SpiceCard } from './SpiceCard';
import { SPICE_IMAGES } from '../../constants/spiceImages';

const spices = [
  {
    id: 'black-cardamom',
    name: 'Black Cardamom',
    price: 569.00,
    imageSrc: SPICE_IMAGES.blackCardamom,
  },
  {
    id: 'Seesame',
    name: 'Seesame seeds',
    price: 286.00,
    imageSrc: SPICE_IMAGES.blackMustard,
  },
  {
    id: 'star-anise',
    name: 'Turmeric',
    price: 629.00,
    imageSrc: SPICE_IMAGES.pippaliPepper,
    onSale: true,
  },
  {
    id: 'rosehip-berries',
    name: 'Coriander ',
    price: 579.00,
    imageSrc: SPICE_IMAGES.rosehipBerries,
  },
  {
    id: 'red-chilly',
    name: 'Red Chilly',
    price: 649.00,
    imageSrc: SPICE_IMAGES.redChilly,
  },
];

export function SpiceGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center text-orange-900 mb-12">
          Premium Spice Collection
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {spices.map((spice) => (
            <SpiceCard
              key={spice.id}
              id={spice.id}
              name={spice.name}
              price={spice.price}
              imageSrc={spice.imageSrc}
              onSale={spice.onSale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}