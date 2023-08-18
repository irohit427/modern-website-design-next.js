import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { portfolioData } from "@/constants";

const PORTFOLIO_DATA = portfolioData;

const getData = (category: |'websites'| 'illustrations'| 'applications') => {
  const data = PORTFOLIO_DATA[category];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({params}: {params: any}) => {
  const category: |'websites'| 'illustrations'| 'applications'  = params.category;
  const data = getData(category);
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              sizes="50vw"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;