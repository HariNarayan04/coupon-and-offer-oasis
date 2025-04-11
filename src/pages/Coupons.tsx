
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { coupons as initialCoupons } from '@/lib/data';
import { Coupon } from '@/lib/types';
import CouponCard from '@/components/CouponCard';
import AddEditCouponForm from '@/components/AddEditCouponForm';
import DeleteConfirmation from '@/components/DeleteConfirmation';
import PageHeader from '@/components/PageHeader';
import { useToast } from '@/hooks/use-toast';
import { v4 as uuidv4 } from 'uuid';

const Coupons = () => {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentCoupon, setCurrentCoupon] = useState<Coupon | undefined>(undefined);
  const { toast } = useToast();

  const handleAddCoupon = () => {
    setCurrentCoupon(undefined);
    setIsFormOpen(true);
  };

  const handleEditCoupon = (coupon: Coupon) => {
    setCurrentCoupon(coupon);
    setIsFormOpen(true);
  };

  const handleDeleteCoupon = (coupon: Coupon) => {
    setCurrentCoupon(coupon);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (currentCoupon) {
      setCoupons(coupons.filter(c => c.id !== currentCoupon.id));
      toast({
        title: "Coupon deleted",
        description: `${currentCoupon.name} has been deleted successfully.`,
      });
      setIsDeleteDialogOpen(false);
      setCurrentCoupon(undefined);
    }
  };

  const saveCoupon = (coupon: Omit<Coupon, 'id'> & { id?: string }) => {
    if (coupon.id) {
      // Edit existing coupon
      setCoupons(coupons.map(c => c.id === coupon.id ? coupon as Coupon : c));
    } else {
      // Add new coupon
      const newCoupon = {
        ...coupon,
        id: uuidv4(),
      } as Coupon;
      setCoupons([...coupons, newCoupon]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <PageHeader 
          title="Coupons Management" 
          subtitle="Create, edit, and manage discount coupons for your customers"
          backLink={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coupons.map((coupon) => (
            <CouponCard
              key={coupon.id}
              coupon={coupon}
              onEdit={handleEditCoupon}
              onDelete={handleDeleteCoupon}
            />
          ))}
        </div>

        {coupons.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-500">No coupons found</h3>
            <p className="mt-1 text-gray-400">Get started by creating a new coupon</p>
          </div>
        )}

        <Button
          className="fixed bottom-6 right-6 shadow-lg rounded-full w-14 h-14"
          onClick={handleAddCoupon}
        >
          <Plus className="h-6 w-6" />
        </Button>

        <AddEditCouponForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSave={saveCoupon}
          coupon={currentCoupon}
        />

        <DeleteConfirmation
          isOpen={isDeleteDialogOpen}
          onClose={() => setIsDeleteDialogOpen(false)}
          onConfirm={confirmDelete}
          itemName={currentCoupon?.name || ''}
          itemType="coupon"
        />
      </div>
    </div>
  );
};

export default Coupons;
