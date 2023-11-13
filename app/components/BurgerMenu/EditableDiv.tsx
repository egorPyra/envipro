// EditableDiv.tsx
import React, { useState } from 'react';

interface EditableDivProps {
  content: string;
  styles: string;
  hoverStyles: string;
  onChangeContent: (value: string) => void;
  onChangeStyles: (value: string) => void;
  onChangeHoverStyles: (value: string) => void;
}

const EditableDiv: React.FC<EditableDivProps> = ({ content, styles, hoverStyles, onChangeContent, onChangeStyles, onChangeHoverStyles }) => {
  const handleContentChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    onChangeContent(event.currentTarget.textContent || '');
  };

  const handleStylesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeStyles(event.currentTarget.value);
  };

  const handleHoverStylesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeHoverStyles(event.currentTarget.value);
  };

  return (
    <div className="editable-div-container">
      <div
        contentEditable={true}
        style={{ display: 'block', ...parseStyles(styles) }} 
        onInput={handleContentChange}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <textarea placeholder="Type your styles here..." style={{ margin:'10px 20px', width:'245px', height:'78px'}} value={styles} onChange={handleStylesChange} />

      {/* <textarea placeholder="Type your hover styles here..." value={hoverStyles} onChange={handleHoverStylesChange} /> */}
    </div>
  );
};

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

export default EditableDiv;
