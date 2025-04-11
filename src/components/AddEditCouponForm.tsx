
import React, { useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Coupon } from '@/lib/types';
import { toast } from '@/hooks/use-toast';

interface AddEditCouponFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (coupon: Omit<Coupon, 'id'> & { id?: string }) => void;
  coupon?: Coupon;
}

const formSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  code: z.string().min(2, { message: 'Code must be at least 2 characters' }),
  description: z.string().min(5, { message: 'Description must be at least 5 characters' }),
  startDate: z.string().min(1, { message: 'Start date is required' }),
  endDate: z.string().min(1, { message: 'End date is required' })
    .refine(data => new Date(data) > new Date(), {
      message: 'End date must be in the future',
    }),
  discountValue: z.coerce.number().min(0, { message: 'Discount value must be a positive number' }),
  discountType: z.enum(['percentage', 'fixed']),
});

const AddEditCouponForm: React.FC<AddEditCouponFormProps> = ({ isOpen, onClose, onSave, coupon }) => {
  const isEditing = !!coupon;
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: '',
      name: '',
      code: '',
      description: '',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
      discountValue: 0,
      discountType: 'percentage',
    },
  });

  useEffect(() => {
    if (coupon) {
      form.reset({
        id: coupon.id,
        name: coupon.name,
        code: coupon.code,
        description: coupon.description,
        startDate: coupon.startDate,
        endDate: coupon.endDate,
        discountValue: coupon.discountValue,
        discountType: coupon.discountType,
      });
    } else {
      form.reset({
        id: undefined,
        name: '',
        code: '',
        description: '',
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
        discountValue: 0,
        discountType: 'percentage',
      });
    }
  }, [coupon, form, isOpen]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onSave(values);
    toast({
      title: isEditing ? "Coupon updated" : "Coupon created",
      description: `${values.name} has been ${isEditing ? "updated" : "created"} successfully.`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Coupon' : 'Add New Coupon'}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Summer Sale" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input placeholder="SUMMER20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="20% off on all summer items" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="discountValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discount Value</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="discountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discount Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Discount Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="percentage">Percentage (%)</SelectItem>
                        <SelectItem value="fixed">Fixed Amount ($)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
              <Button type="submit">{isEditing ? 'Update' : 'Create'}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditCouponForm;
