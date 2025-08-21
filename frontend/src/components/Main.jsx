import React from 'react';
import { BentoGrid, BentoGridItem } from './Bento-grid';
import { BellIcon } from '@heroicons/react/24/solid';
import '../css/Main.css';

// A placeholder for the header content
const Skeleton = () => (
  <div style={{
      flex: 1,
      width: '100%',
      height: '100%',
      minHeight: '6rem',
      borderRadius: '0.75rem',
      backgroundColor: '#f3f4f6'
  }}></div>
);


export default function MyPage() {
  const items = [
    {
      title: "Item One",
      description: "A short description for the first item.",
      icon: <BellIcon style={{ height: '1rem', width: '1rem', color: '#737373' }} />,
      className: "div_1",
    },
    {
      title: "Item Three",
      description: "A short description for the third item.",
      header: <Skeleton />,
      icon: <BellIcon style={{ height: '1rem', width: '1rem', color: '#737373' }} />,
      className: "div_1",
    },
    {
      title: "A Larger Item",
      description: "This item is wider than the others.",
      header: <Skeleton />,
      icon: <BellIcon style={{ height: '1rem', width: '1rem', color: '#737373' }} />,
      className: "md-col-span-2" // This makes the item span 2 columns
    },
  ];

  return (
    <div style={{ padding: '2.5rem' }}>
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
}