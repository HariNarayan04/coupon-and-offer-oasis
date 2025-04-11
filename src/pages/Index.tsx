
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tag, Percent } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center my-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Coupon & Offer Management
          </h1>
          <p className="mt-3 text-xl text-gray-500 max-w-2xl mx-auto">
            Create and manage your coupons and product offers from a central dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link to="/coupons" className="transition-transform hover:scale-105">
            <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer border-0">
              <CardHeader className="bg-blue-500 text-white">
                <CardTitle className="flex items-center text-2xl">
                  <Tag className="mr-2 h-6 w-6" /> Coupons Management
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Create and manage discount codes
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600">
                  Create, edit, and delete coupon codes. Set validity periods and discount values for special promotions and sales.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="mr-2">•</span> Percentage and fixed amount discounts
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span> Time-based promotions
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span> Custom coupon codes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link to="/offers" className="transition-transform hover:scale-105">
            <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer border-0">
              <CardHeader className="bg-green-500 text-white">
                <CardTitle className="flex items-center text-2xl">
                  <Percent className="mr-2 h-6 w-6" /> Offers Management
                </CardTitle>
                <CardDescription className="text-green-100">
                  Apply discounts on products and categories
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600">
                  Set up discounts for specific products or entire categories. Manage sale prices and special promotions.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="mr-2">•</span> Category-wide discounts
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span> Product-specific offers
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span> Activate/deactivate promotions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
