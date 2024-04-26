import { TopMenu } from "@/components";
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <TopMenu />
      {children}
    </main>
  );
}
