import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Menu, User, Search } from "lucide-react";

const data = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 2000, expenses: 9800 },
  { month: "Apr", revenue: 2780, expenses: 3908 },
  { month: "May", revenue: 1890, expenses: 4800 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow-lg">
        <h1 className="text-2xl font-bold mb-6">FinancePro</h1>
        <nav className="space-y-4">
          <Button variant="ghost" className="w-full flex justify-start">Dashboard</Button>
          <Button variant="ghost" className="w-full flex justify-start">Reports</Button>
          <Button variant="ghost" className="w-full flex justify-start">Transactions</Button>
          <Button variant="ghost" className="w-full flex justify-start">Settings</Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Menu className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Dashboard</h2>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer" />
            <User className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader><CardTitle>Revenue</CardTitle></CardHeader>
            <CardContent><p className="text-2xl font-bold">$12,500</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Expenses</CardTitle></CardHeader>
            <CardContent><p className="text-2xl font-bold">$8,300</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Net Profit</CardTitle></CardHeader>
            <CardContent><p className="text-2xl font-bold">$4,200</p></CardContent>
          </Card>
        </div>

        {/* Chart */}
        <Card className="p-4">
          <CardHeader><CardTitle>Financial Overview</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#4CAF50" />
                <Bar dataKey="expenses" fill="#F44336" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
