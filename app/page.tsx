import BLogSection from "@/components/BLogSection";
import ButtonSection from "@/components/ButtonSection";
import Header from "@/components/Header";
export const revalidate = 30;

export default function Home() {
  return (
    <>
      <Header />
      <ButtonSection/>
      <h1 className="text-3xl font-bold my-6">Latest BLogs</h1>
      <BLogSection/>
    </>
  );
}
