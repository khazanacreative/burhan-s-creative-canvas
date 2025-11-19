import { useState, useEffect } from 'react';

export const useEditableContent = (key: string, defaultValue: string) => {
  const [content, setContent] = useState(defaultValue);

  useEffect(() => {
    const stored = localStorage.getItem(`content_${key}`);
    if (stored) {
      setContent(stored);
    }
  }, [key]);

  const updateContent = (newContent: string) => {
    setContent(newContent);
    localStorage.setItem(`content_${key}`, newContent);
  };

  return [content, updateContent] as const;
};

export const useEditableImage = (key: string, defaultValue: string) => {
  const [imageSrc, setImageSrc] = useState(defaultValue);

  useEffect(() => {
    const stored = localStorage.getItem(`image_${key}`);
    if (stored) {
      setImageSrc(stored);
    }
  }, [key]);

  const updateImage = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setImageSrc(base64);
      localStorage.setItem(`image_${key}`, base64);
    };
    reader.readAsDataURL(file);
  };

  return [imageSrc, updateImage] as const;
};
