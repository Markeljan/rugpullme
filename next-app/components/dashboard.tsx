"use client";

import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Overview } from "@/components/charts/overview";
import { LineChartContainer } from "./charts/line-chart";
import Header from "./header";
import { useWriteContract } from "wagmi";
import { mantleSepolia } from "@/app/wallet-provider";
import { parseEther, parseUnits } from "viem";
import { CONTRACT_ABI } from "./wallet-options";

export default function Dashboard() {
  const { writeContractAsync } = useWriteContract();

  const handleBuy = async () => {
    await writeContractAsync({
      chainId: mantleSepolia.id,
      address: "0x16eb369a168e4d2f990abf32ca4d7207c775c387",
      functionName: "buyTokens",
      value: parseEther("1"),
      abi: CONTRACT_ABI,
    });
  };

  const handleSell = async () => {
    await writeContractAsync({
      chainId: mantleSepolia.id,
      address: "0x16eb369a168e4d2f990abf32ca4d7207c775c387",
      functionName: "sellTokens",
      args: [parseUnits("1", 1)],
      abi: CONTRACT_ABI,
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {/* <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div> */}
        <div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Alert className="col-span-8">
              <Terminal className="h-4 w-4" />
              <AlertTitle>What is RugPullMe.xyz?</AlertTitle>
              <AlertDescription>
                Bonding Curve Token with a 0.01% chance to rug pull on every transaction! At $5,000 market cap, the
                rugpull mechnism will be deactivated and 50% of the supply will be locked in a DEX liquidity pool. All
                rug funds automatically buyback and burn the RugPullMe token, held by the community.
              </AlertDescription>
              <AlertDescription className="flex gap-4">
              <Button className="mt-6" onClick={handleBuy}>
                Buy current $RUGTOKEN (1/100 chance to get rugged!)
              </Button>
              <Button className="mt-6" onClick={handleSell}>
                Sell current $RUGTOKEN (1/100 chance to get rugged!)
              </Button>
              </AlertDescription>

              <AlertDescription className="flex justify-end gap-4 pt-2">
                <Link
                  className="text-blue-500 underline"
                  href="https://bafybeifoh4egipfyuonpsbxq7f64olvd5icp6fj4jfjkuzy6fbbjxfrqyy.ipfs.nftstorage.link/"
                  target="_blank"
                >
                  BondingCurveToken.sol
                </Link>
                <Link
                  className="text-blue-500 underline"
                  href="https://holesky.etherscan.io/address/0x19e9ff54f9b671eb02cadf8888d19015a9aac0d9"
                  target="_blank"
                >
                  Explorer URL
                </Link>
              </AlertDescription>
            </Alert>
            <Card className="col-span-8">
              <CardHeader>
                <CardTitle>$RPM</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                {/* <LineChartContainer /> */}
                <Overview />
              </CardContent>
            </Card>
            {/* <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card> */}
          </div>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-8">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Transactions</CardTitle>
                <CardDescription>Recent transactions.</CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>USD</TableHead>
                    <TableHead>Token Amount</TableHead>
                    <TableHead>Wallet</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">1h ago</div>
                    </TableCell>
                    <TableCell>
                      <div>Buy</div>
                    </TableCell>
                    <TableCell>
                      <div>$250.00</div>
                    </TableCell>
                    <TableCell>
                      <div>0.5</div>
                    </TableCell>
                    <TableCell>0x1110...48D5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">2h ago</div>
                    </TableCell>
                    <TableCell>
                      <div>Sell</div>
                    </TableCell>
                    <TableCell>
                      <div>$500.00</div>
                    </TableCell>
                    <TableCell>
                      <div>1.0</div>
                    </TableCell>
                    <TableCell>0x1110...48D5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">3h ago</div>
                    </TableCell>
                    <TableCell>
                      <div>Buy</div>
                    </TableCell>
                    <TableCell>
                      <div>$100.00</div>
                    </TableCell>
                    <TableCell>
                      <div>0.2</div>
                    </TableCell>
                    <TableCell>0x1110...48D5</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          {/* <Card>
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$299.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/04.png" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    William Kim
                  </p>
                  <p className="text-sm text-muted-foreground">
                    will@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$99.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/05.png" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    sofia.davis@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </main>
    </div>
  );
}
