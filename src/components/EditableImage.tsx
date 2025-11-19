import { useRef } from 'react';
import { Button } from './ui/button';
import { Upload } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface EditableImageProps {
  src: string;
  alt: string;
  onImageChange: (file: File) => void;
  className?: string;
}

const EditableImage = ({ src, alt, onImageChange, className = '' }: EditableImageProps) => {
  const { isEditMode } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageChange(file);
    }
  };

  return (
    <div className="relative group">
      <img src={src} alt={alt} className={className} />
      {isEditMode && (
        <>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <Button
            size="sm"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="h-4 w-4 mr-1" />
            Change Image
          </Button>
        </>
      )}
    </div>
  );
};

export default EditableImage;
