import Breadcrumb from "@/components/ui/Breadcrumb";
import SalesOverviewChart from "@/components/charts/SalesOverviewChart";
import { KPIWidget } from "@/components/charts/KPIWidget";
import BestSellingProducts from "@/components/charts/BestSellingProducts";
import RecentOrders from "@/components/charts/RecentOrders";
import RevenuePieChart from "@/components/charts/RevenuePieChart";

export default function DashboardPage() {
  return (
    <div>
      <Breadcrumb />
      <h1 className="text-1xl font-semibold text-white mb-4">Overview</h1>

      {/* KPI Widgets Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <KPIWidget
          title="Users"
          value="14k"
          delta={25}
          trendColor="green"
          timeframe="Last 30 days"
        />
        <KPIWidget
          title="Conversions"
          value="325"
          delta={-25}
          trendColor="red"
          timeframe="Last 30 days"
        />
        <KPIWidget
          title="Revenue"
          value="$12.4k"
          delta={12}
          trendColor="green"
          timeframe="Last 30 days"
        />
        <div className="bg-gray-850 p-6 rounded-xl shadow-xl flex flex-col justify-between border border-gray-700/40 hover:border-gray-600 transition duration-300">
          <div>
            <h3 className="text-white font-extrabold text-lg mb-2">Explore Data Insights</h3>
            <p className="text-gray-400 text-sm mb-4">
              Uncover performance and visitor insights with our analytics wizardry.
            </p>
          </div>
          <button className="rounded-lg bg-white/10 text-white font-semibold py-2 mt-auto hover:bg-white/20 transition hover:shadow-lg hover:shadow-sky-500/20">
            Get insights →
          </button>
        </div>
      </div>

      {/* Chart Row */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8">
        <SalesOverviewChart />
        <BestSellingProducts />
      </div>

      {/* Recent Orders + KPI Row (75% / 25%) */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
        <div className="lg:col-span-1">
          <RevenuePieChart />
        </div>
      </div>
    </div>
  );
}
