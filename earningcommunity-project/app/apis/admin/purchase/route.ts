import prisma from "@/libs/prisma";

import { NextRequest, NextResponse } from "next/server";
const shortMonths: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
const GET = async (request: NextRequest) => {
    const skip = parseInt(request.nextUrl.searchParams.get('skip') as string)
    const take = parseInt(request.nextUrl.searchParams.get('take') as string)

    try {
        const packages = await prisma.packages.findMany({
            include: {
                packageHistory: {
                    where:{status:"ACCEPTED"}
                }
            },
            take:take||undefined,
            skip:skip||undefined,
        })
        const count=await prisma.packages.count()
        const packageHistory = await prisma.packageHistory.findMany({
            orderBy: {
                date: "desc"
            },
            where:{
                status:"ACCEPTED"
            }

        })
        const totalPriceByMonth: { [key: string]: number } = {};
        for (const entry of packageHistory) {
            const date = new Date(entry.date);
            const monthYearKey = `${shortMonths[date.getMonth()]}-${date.getFullYear()}`;

            if (!totalPriceByMonth[monthYearKey]) {
                totalPriceByMonth[monthYearKey] = 0;
            }

            totalPriceByMonth[monthYearKey] += entry.price;
        }

        // Calculate total sales (totalSell)
        let totalSell = 0;
        for (const key in totalPriceByMonth) {
            totalSell += totalPriceByMonth[key];
        }

        // Calculate the date for the last month
        const currentDate = new Date();
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        const lastMonthKey = `${shortMonths[lastMonth.getMonth()]}-${lastMonth.getFullYear()}`;

        // Calculate total sales for last month
        const lastMonthSales = totalPriceByMonth[lastMonthKey] || 0;

        // Calculate the percentage of sales for last month compared to total sales
        const percentageLastMonthSales = (lastMonthSales / totalSell) * 100;

        return NextResponse.json({ packages, totalPriceByMonth, totalSell, percentageLastMonthSales,count })
    } catch (error) {
        return NextResponse.json({ error: "Failed to get packages", code: error }, { status: 404 })
    }
}
export { GET }