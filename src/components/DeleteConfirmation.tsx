
import React from 'react';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Coupon } from '@/lib/types';

interface DeleteConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName: string;
  itemType: 'coupon' | 'offer';
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  isOpen,
  onClose,
  onConfirm,
  itemName,
  itemType
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            You are about to delete the {itemType} <span className="font-semibold text-gray-900">{itemName}</span>. 
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} className="bg-red-600 hover:bg-red-700">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmation;
