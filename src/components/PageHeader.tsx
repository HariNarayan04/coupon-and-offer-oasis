
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backLink?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backLink = false }) => {
  const navigate = useNavigate();
  
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4">
        {backLink && (
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
