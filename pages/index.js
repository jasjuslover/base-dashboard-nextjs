import { SidebarProvider } from "../context/SidebarContext";
import Layout from "../containers/Layout";

export default function Home() {
  return (
    <>
      <SidebarProvider>
        <Layout>
          <div className="flex flex-col justify-between h-screen">
            <p>ease-in-out duration-150</p>
            <p>ease-in-out duration-150</p>
          </div>
        </Layout>
      </SidebarProvider>
    </>
  );
}
