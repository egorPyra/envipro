// BurgerContent.tsx
import React, { useState } from 'react';
import styles from './burger-menu.module.css';
import Link from 'next/link';
import EditableDiv from './EditableDiv'; // Adjust the path based on your project structure

interface IBurgerContent {
  isActive: boolean;
  activateMenuFunc: (value: (((prevState: boolean) => boolean) | boolean)) => void;
}

export default function BurgerContent({ isActive, activateMenuFunc }: IBurgerContent) {
  const [editableContent, setEditableContent] = useState<string>('Форма для редактирования');
  const [editableStyles, setEditableStyles] = useState<string>('color: red;');

  const handleEditableContentChange = (value: string) => {
    setEditableContent(value);
  };

  const handleEditableStylesChange = (value: string) => {
    setEditableStyles(value);
  };

  return (
    <>
      <div className={isActive ? styles.block : styles.block}></div>
      <div
        className={isActive ? `${styles.menuContent} ${styles.menuActive1}` : `${styles.menuContent}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.closeBtnWrap}>
          <button onClick={() => activateMenuFunc(false)} className={styles.closeBtn} />
        </div>

        <EditableDiv
          content={editableContent}
          styles={editableStyles}
          onChangeContent={handleEditableContentChange}
          onChangeStyles={handleEditableStylesChange}
        />

        <ul className={styles.menuList}>
          <li className={styles.menuListTitle}>
            <Link href={'/about_us'}>О нас</Link>
            <ul className={styles.menuListSubTitle} style={parseStyles(editableStyles) as React.CSSProperties}>
              <li>НАША ИСТОРИЯ</li>
              <li>НАША КОМАНДА</li>
              <li>КЛИЕНТЫ</li>
              <li>СОХРАНЯЯ УЛУЧШАТЬ</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

// Updated parseStyles function
const parseStyles = (styles: string): React.CSSProperties => {
  const styleObject: Record<string, string> = {};
  styles.split(';').forEach((style) => {
    const [property, value] = style.split(':');
    if (property && value) {
      styleObject[property.trim()] = value.trim();
    }
  });
  return styleObject;
};
