"use client"

import { DollarSign, CreditCard, Activity, BarChart, DollarSignIcon } from "lucide-react";
import SalesCard, { SalesProps } from "../../components/SalesChart";
import Card, { CardProps, CardContent } from "@/components/Card";
import PageTitle from "@/components/Page.title";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    description: "+180.1% from last month",
    icon: DollarSignIcon
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    description: "+201 since last hour",
    icon: Activity
  }
];

const uesrSalesData: SalesProps[] = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      saleAmount: "+$1,999.00"
    },
    {
      name: "Jackson Lee",
      email: "isabella.nguyen@email.com",
      saleAmount: "+$1,999.00"
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      saleAmount: "+$39.00"
    },
    {
      name: "William Kim",
      email: "will@email.com",
      saleAmount: "+$299.00"
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      saleAmount: "+$39.00"
    }
  ];

const Dashbord = () => {
    return (
        <div className="flex flex-col gap-5 p-8 w-full ">
          <PageTitle title="Dashboard" />
          <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
            {cardData.map((d, i) => (
              <Card
                key={i}
                amount={d.amount}
                description={d.description}
                icon={d.icon}
                label={d.label}
              />
            ))}
          </section>
          <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
            <CardContent>
              <p className="p-4 font-semibold">Overview</p>
              <BarChart />
            </CardContent>
            <CardContent className="flex justify-between gap-4">
              <section>
                <p>Recent Sales</p>
                <p className="text-sm text-gray-400">
                  You made 265 sales this month.
                </p>
              </section>
              {uesrSalesData.map((d, i) => (
                <SalesCard
                  key={i}
                  email={d.email}
                  name={d.name}
                  saleAmount={d.saleAmount}
                />
              ))}
            </CardContent>
          </section>
        </div>
      );
}
 
export default Dashbord;