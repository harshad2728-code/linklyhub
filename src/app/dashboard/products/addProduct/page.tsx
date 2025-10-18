"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import { useState } from "react";
import { UploadCloud, DollarSign, Package, Tag, Percent, X, Plus } from "lucide-react";

export default function CreateProductPage() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number | string>("");
  const [stock, setStock] = useState<number | string>("");
  const [discount, setDiscount] = useState<number | string>("");
  const [sku, setSku] = useState("");
  const [description, setDescription] = useState("");
  const [variants, setVariants] = useState<{ name: string; value: string }[]>([{ name: "", value: "" }]);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      productName,
      category,
      price: Number(price),
      stock: Number(stock),
      discount: Number(discount),
      sku,
      description,
      variants,
      tags,
    });
  };

  const addVariant = () => setVariants([...variants, { name: "", value: "" }]);

  const updateVariant = (index: number, field: "name" | "value", value: string) => {
    const newVariants = [...variants];
    newVariants[index][field] = value;
    setVariants(newVariants);
  };

  const removeVariant = (index: number) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      <Breadcrumb />
      <h1 className="text-1xl font-semibold text-white my-4">Create New Product</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Details */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Product Details</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="productName" className="text-sm font-medium text-slate-300 block mb-2">
                    Product Name
                  </label>
                  <input
                    id="productName"
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="e.g., Premium T-shirt"
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-sm text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="text-sm font-medium text-slate-300 block mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add a detailed description for your product..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-sm text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>
              </div>
            </div>

            {/* Variants */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Variants</h2>
              <div className="space-y-3">
                {variants.map((variant, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Name (e.g. Size)"
                      value={variant.name}
                      onChange={(e) => updateVariant(index, "name", e.target.value)}
                      className="w-1/3 bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Values (e.g. S, M, L)"
                      value={variant.value}
                      onChange={(e) => updateVariant(index, "value", e.target.value)}
                      className="flex-1 bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => removeVariant(index)}
                      className="p-2 rounded-md bg-slate-700/50 hover:bg-red-600/50 text-slate-400 hover:text-red-300 transition"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addVariant}
                  className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition pt-2"
                >
                  <Plus size={16} />
                  Add another variant
                </button>
              </div>
            </div>

            {/* Image Upload */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Product Image</h2>
              <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition">
                <UploadCloud className="mx-auto h-12 w-12 text-slate-400" />
                <p className="mt-2 text-sm text-slate-400">
                  <span className="font-semibold text-blue-400">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-slate-500">PNG, JPG, GIF (max. 800x400px)</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Organization */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Organization</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="category" className="text-sm font-medium text-slate-300 block mb-2">
                    Category
                  </label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full appearance-none bg-slate-800 border border-slate-700 rounded-md pl-10 pr-4 py-2 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                    >
                      <option value="">Select Category</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Beauty">Beauty</option>
                      <option value="Gadgets">Gadgets</option>
                      <option value="Grocery">Grocery</option>
                    </select>
                  </div>
                </div>

                {/* SKU */}
                <div>
                  <label htmlFor="sku" className="text-sm font-medium text-slate-300 block mb-2">
                    SKU / Barcode
                  </label>
                  <input
                    id="sku"
                    type="text"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                    placeholder="e.g., TSHIRT-BL-L"
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-sm text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>

                {/* Tags */}
                <div>
                  <label htmlFor="tags" className="text-sm font-medium text-slate-300 block mb-2">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 bg-blue-500/20 text-blue-300 text-xs font-semibold px-2 py-1 rounded-full"
                      >
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)} className="ml-1">
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <input
                    id="tags"
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagKeyDown}
                    placeholder="Add tags (press Enter)"
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-sm text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>
              </div>
            </div>

            {/* Pricing & Stock */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Pricing & Stock</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="price" className="text-sm font-medium text-slate-300 block mb-2">
                    Price
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      id="price"
                      type="number"
                      min={0}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-slate-800 border border-slate-700 rounded-md pl-10 pr-4 py-2 text-sm text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="discount" className="text-sm font-medium text-slate-300 block mb-2">
                    Discount
                  </label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      id="discount"
                      type="number"
                      min={0}
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      placeholder="0"
                      className="w-full bg-slate-800 border border-slate-700 rounded-md pl-10 pr-4 py-2 text-sm text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="stock" className="text-sm font-medium text-slate-300 block mb-2">
                    Stock Quantity
                  </label>
                  <div className="relative">
                    <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      id="stock"
                      type="number"
                      min={0}
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      placeholder="0"
                      className="w-full bg-slate-800 border border-slate-700 rounded-md pl-10 pr-4 py-2 text-sm text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-md hover:shadow-lg hover:shadow-blue-500/30"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}
