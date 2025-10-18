"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Eye, Pencil, Trash2, PlusCircle, Search } from "lucide-react";
import { Switch } from "@headlessui/react"; // for modern toggle
import Pagination from "@/components/ui/Pagination";
import { useRouter} from "next/navigation";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  published: boolean;
  image: string;
}

const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Blue Premium T-shirt",
    category: "Fashion",
    price: 21.0,
    stock: 45,
    published: true,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200",
  },
  {
    id: 2,
    name: "Boston Round Cream Pack",
    category: "Beauty",
    price: 24.0,
    stock: 0,
    published: false,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=200",
  },
  {
    id: 3,
    name: "Casual Shirt for Man",
    category: "Fashion",
    price: 26.0,
    stock: 12,
    published: false,
    image: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=200",
  },
  {
    id: 4,
    name: "Samsung Galaxy M1",
    category: "Gadgets",
    price: 250.0,
    stock: 6,
    published: true,
    image: "https://images.unsplash.com/photo-1512499617640-c2f999018b72?w=200",
  },
  {
    id: 5,
    name: "Tomato Pack",
    category: "Grocery",
    price: 10.0,
    stock: 80,
    published: true,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=200",
  },
];

export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState(dummyProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const togglePublished = (id: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, published: !p.published } : p
      )
    );
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div>
      <Breadcrumb />
      <h1 className="text-1xl font-semibold text-white my-4">
        Product Management
      </h1>

      {/* Header Actions */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-slate-800 border border-slate-700 rounded-full pl-10 pr-4 py-2 text-sm text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>

          <button onClick={() => router.push("/dashboard/products/addProduct")}className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-md hover:shadow-lg hover:shadow-blue-500/30 text-xs">
            <PlusCircle size={18} />
            Add Product
          </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-slate-800/50 border border-slate-700 rounded-lg">
        <table className="min-w-full divide-y divide-slate-700 text-sm">
          <thead className="bg-slate-800">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Name</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Category</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Stock</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Price</th>
              <th className="px-6 py-3 text-center font-semibold text-slate-300">Published</th>
              <th className="px-6 py-3 text-center font-semibold text-slate-300">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-700">
            {currentProducts.map((product) => (
              <tr key={product.id} className="hover:bg-slate-800 transition">
                {/* Name */}
                <td className="px-6 py-3 flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 rounded object-cover border border-slate-600"
                  />
                  <div>
                    <p className="font-medium text-white">{product.name}</p>
                    <p className="text-xs text-slate-400">#{product.id}</p>
                  </div>
                </td>

                {/* Category */}
                <td className="px-6 py-3">
                  <span className="bg-slate-700/50 text-blue-400 text-xs px-3 py-1 rounded-full font-medium">
                    {product.category}
                  </span>
                </td>

                {/* Stock */}
                <td className="px-6 py-3">
                  {product.stock > 20 ? (
                    <span className="text-green-400 font-medium">{product.stock} in stock</span>
                  ) : product.stock > 0 ? (
                    <span className="text-yellow-400 font-medium">{product.stock} left</span>
                  ) : (
                    <span className="text-red-400 font-medium">Out of stock</span>
                  )}
                </td>

                {/* Price */}
                <td className="px-6 py-3 text-blue-400 font-semibold">
                  ${product.price.toFixed(2)}
                </td>

                {/* Published Switch */}
                <td className="px-6 py-3 text-center">
                  <Switch
                    checked={product.published}
                    onChange={() => togglePublished(product.id)}
                    className={`${product.published ? "bg-blue-600" : "bg-slate-600"
                      } relative inline-flex h-6 w-11 items-center rounded-full transition`}
                  >
                    <span
                      className={`${product.published ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </td>

                {/* Actions */}
                <td className="px-6 py-3 text-center flex justify-center gap-3">
                  <button className="p-2 rounded-full bg-slate-700 hover:bg-blue-600 transition text-blue-400 hover:text-white">
                    <Eye size={16} />
                  </button>
                  <button className="p-2 rounded-full bg-slate-700 hover:bg-green-600 transition text-green-400 hover:text-white">
                    <Pencil size={16} />
                  </button>
                  <button className="p-2 rounded-full bg-slate-700 hover:bg-red-600 transition text-red-400 hover:text-white">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </div>
  );
}
