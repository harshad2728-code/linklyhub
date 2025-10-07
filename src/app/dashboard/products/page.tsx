import Breadcrumb from "@/components/ui/Breadcrumb";

export default function ProductsPage() {

  return (
    <div>
      <Breadcrumb />
      <h1 className="text-1xl font-semibold text-white my-4">
        Products Management
      </h1>
      {/* You can add your product management components here */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
        <p className="text-slate-400">
          Product table and management tools will be displayed here.
        </p>
      </div>
    </div>
  );
}