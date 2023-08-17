import React, { Fragment } from 'react'
import styles from './footer.module.css';
import Image from 'next/image';
import { FOOTER_ICONS } from '@/constants';

const footerIcons = FOOTER_ICONS;

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 Luminax. All Rights Reserved</div>
      <div className={styles.social}>
        {footerIcons.map((icon) =>
          <Fragment key={icon.id}>
            <Image
              className={styles.icon}
              src={icon.src}
              alt={icon.alt}
              width={24}
              height={24}
            />
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default Footer