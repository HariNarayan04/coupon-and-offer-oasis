
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { products, categories } from '@/lib/data';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const Offers = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <PageHeader 
          title="Offers Management" 
          subtitle="Apply discounts to categories and products"
          backLink={true}
        />

        <Tabs defaultValue="products" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card key={category.id} className="overflow-hidden hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <Badge variant={category.isActive ? "default" : "outline"} className={category.isActive ? "bg-green-100 text-green-800 hover:bg-green-100" : "text-gray-500"}>
                        {category.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {category.discountType === 'percentage' 
                        ? `${category.discountValue}% off` 
                        : `$${category.discountValue} off`}
                    </p>
                    <div className="flex mt-4 space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Delete</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="products">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <span className="text-sm text-gray-500">Category: {product.category}</span>
                      </div>
                      <Badge variant={product.isActive ? "default" : "outline"} className={product.isActive ? "bg-green-100 text-green-800 hover:bg-green-100" : "text-gray-500"}>
                        {product.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-600">Original Price:</span>
                      <span className="font-medium">${product.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-600">Discount:</span>
                      <span className="font-medium text-green-600">
                        {product.discountType === 'percentage' 
                          ? `${product.discountValue}%` 
                          : `$${product.discountValue}`}
                      </span>
                    </div>
                    <div className="flex justify-between font-semibold border-t pt-3">
                      <span>Final Price:</span>
                      <span>
                        ${product.discountType === 'percentage' 
                          ? (product.price - (product.price * product.discountValue / 100)).toFixed(2)
                          : (product.price - product.discountValue).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex mt-4 space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Delete</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Button
          className="fixed bottom-6 right-6 shadow-lg rounded-full w-14 h-14"
          onClick={() => alert('Add offer functionality will be implemented!')}
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Offers;
