// EditableDiv.tsx
import React, { useState } from 'react';

interface EditableDivProps {
  content: string;
  styles: string;
  onChangeContent: (value: string) => void;
  onChangeStyles: (value: string) => void;
}

const EditableDiv: React.FC<EditableDivProps> = ({ content, styles, onChangeContent, onChangeStyles }) => {
  const handleContentChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    onChangeContent(event.currentTarget.textContent || '');
  };

  const handleStylesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeStyles(event.currentTarget.value);
  };

  return (
    <div>
      <div
        contentEditable={true}
        style={{ display: 'block', ...parseStyles(styles) }}
        onInput={handleContentChange}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <textarea placeholder="Write down your styles here..." value={styles} style={{margin:'10px', width:'240px', height:'80px'}} onChange={handleStylesChange} />
    </div>
  );
};

const parseStyles = (styles: string): React.CSSProperties => {
  const styleObject: React.CSSProperties = {};
  styles.split(';').forEach((style) => {
    const [property, value] = style.split(':');
    if (property && value) {
      styleObject[property.trim()] = value.trim();
    }
  });
  return styleObject;
};

export default EditableDiv;
