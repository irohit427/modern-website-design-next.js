import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from './page.module.css';

const getData = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

const Blog = async () => {

  const data:any = await getData();
  console.log(data);
  
  return (
    <div className={styles.mainContainer}>
      {data.map((item: any) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog