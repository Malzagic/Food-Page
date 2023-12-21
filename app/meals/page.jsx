import { Suspense } from "react";
import Link from "next/link";

import MealsGrid from "../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import MealsLoadingPage from "./loadng-out";

import styles from "./meals-page.module.css";

export const metadata = {
  title: 'All Meals',
  description: 'Browse the deliciouse meals shared by our vibrant community.',
};


async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href={"/meals/share"}>Share your favorite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
