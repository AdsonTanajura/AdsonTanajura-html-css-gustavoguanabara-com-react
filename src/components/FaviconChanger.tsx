import React, { useEffect } from 'react';

const FaviconChanger: React.FC<{ iconUrl: string }> = ({ iconUrl }) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = iconUrl;

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [iconUrl]);

  return null; 
};

export default FaviconChanger;
