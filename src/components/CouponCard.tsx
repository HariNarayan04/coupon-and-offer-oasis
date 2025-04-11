
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Coupon } from '@/lib/types';
import { Pencil, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CouponCardProps {
  coupon: Coupon;
  onEdit: (coupon: Coupon) => void;
  onDelete: (coupon: Coupon) => void;
}

const CouponCard: React.FC<CouponCardProps> = ({ coupon, onEdit, onDelete }) => {
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM d, yyyy');
  };

  const isActive = new Date(coupon.endDate) >= new Date();

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{coupon.name}</h3>
            <div className="mt-1 flex items-center">
              <span className="bg-gray-100 px-2.5 py-1 rounded text-sm font-mono text-gray-800">
                {coupon.code}
              </span>
            </div>
          </div>
          <div className="flex space-x-1">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onEdit(coupon)}
              className="text-gray-500 hover:text-blue-600 hover:bg-blue-50"
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onDelete(coupon)}
              className="text-gray-500 hover:text-red-600 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <p className="mt-3 text-gray-600 text-sm line-clamp-2">{coupon.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-gray-500">
            {formatDate(coupon.startDate)} - {formatDate(coupon.endDate)}
          </div>
          <Badge 
            variant={isActive ? "default" : "outline"}
            className={isActive ? "bg-green-100 text-green-800 hover:bg-green-100" : "text-gray-500"}
          >
            {isActive ? "Active" : "Expired"}
          </Badge>
        </div>

        <div className="mt-3">
          <Badge variant="secondary" className="text-xs">
            {coupon.discountType === 'percentage' 
              ? `${coupon.discountValue}% off` 
              : `$${coupon.discountValue} off`}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default CouponCard;
