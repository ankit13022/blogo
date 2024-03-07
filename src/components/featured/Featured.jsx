import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1> */}
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Discover my stories and creative ideas. welcome to Blogo
          </h1>
          <p className={styles.postDesc}>
            A smile is the universal welcome. The soul should always stand ajar,
            ready to welcome the ecstatic experience. All strange and terrible
            events are welcome, but comforts we despise. Like a welcome summer
            rain, humor may suddenly cleanse and cool the earth, the air and you
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
