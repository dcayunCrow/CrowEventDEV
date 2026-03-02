import React from 'react';
import ExploreCard from '@/components/ExploreCard';
import { getAllCategories } from '@/data/mockCategories';
import styles from './explore.module.scss';

export default function ExplorePage() {
  const categories = getAllCategories();

  return (
    <div className={styles.explorePage}>
      <div className={styles.categoriesGrid}>
        {categories.map((category) => (
          <ExploreCard
            key={category.id}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
