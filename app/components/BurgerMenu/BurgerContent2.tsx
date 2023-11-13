// BurgerContent.tsx
import React, { useState } from 'react';
import styles from './burger-menu.module.css';
import Link from 'next/link';
import EditableDiv from './EditableDiv'; 
import CSS from "csstype";

export const DropdownTextHov: { [P in CSS.SimplePseudos]?: CSS.Properties }  = {
  ':hover': {
    color: 'blue',
  },
}

interface IBurgerContent {
  isActive: boolean;
  activateMenuFunc: (value: (((prevState: boolean) => boolean) | boolean)) => void;
}

export default function BurgerContent({ isActive, activateMenuFunc }: IBurgerContent) {
  const [editableContent, setEditableContent] = useState<string>('Type your text here...');
  const [editableStyles, setEditableStyles] = useState<string>('color: red;');
  const [editableHoverStyles, setEditableHoverStyles] = useState<string>('.menuListSubTitle li:hover { color: blue; }');
  
  const pseudoClasses = {
    hover: ':hover'
  }

  const handleEditableContentChange = (value: string) => {
    setEditableContent(value);
  };

  const handleEditableStylesChange = (value: string) => {
    setEditableStyles(value);
  };

  const handleEditableHoverStylesChange = (value: string) => {
    setEditableHoverStyles(value);
  };

  return (
    <>
      <div className={isActive ? styles.block : styles.block}></div>
      <div
        className={isActive ? `${styles.menuContent} ${styles.menuActive2}` : `${styles.menuContent}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.closeBtnWrap}>
          <button onClick={() => activateMenuFunc(false)} className={styles.closeBtn} />
        </div>

        <EditableDiv
          content={editableContent}
          styles={editableStyles}
          hoverStyles={editableHoverStyles}
          onChangeContent={handleEditableContentChange}
          onChangeStyles={handleEditableStylesChange}
          onChangeHoverStyles={handleEditableHoverStylesChange}
        />

        
        <ul className={styles.menuList}>
          <li className={styles.menuListTitle}>
            <Link href={'/about_us'}>О нас</Link>
            <ul className={styles.menuListSubTitle} style={parseStyles(editableStyles) as React.CSSProperties} >
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
