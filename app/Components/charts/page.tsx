'use client';

import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import ChartForDashboard from "./chart";


export default function ChartAreaPage() {
    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            {/* <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
                {data.map((item) => (
                    <Card key={item.category}>
                        <Title>{item.category}</Title>
                        <Flex
                            justifyContent="start"
                            alignItems="baseline"
                            className="space-x-2"
                        >
                            <Metric>{item.stat}</Metric>
                            <Text>Total views</Text>
                        </Flex>
                        <Flex className="mt-6">
                            <Text>Pages</Text>
                            <Text className="text-right">Views</Text>
                        </Flex>
                        <BarList
                            data={item.data}
                            valueFormatter={(number: number) =>
                                Intl.NumberFormat('us').format(number).toString()
                            }
                            className="mt-2"
                        />
                    </Card>
                ))}
            </Grid> */}
            <ChartForDashboard />
        </main>
    );
}