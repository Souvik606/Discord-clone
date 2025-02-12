import { NavigationSideBar } from "@/components/navigation/navigation-sidebar"

const MainLayout=async({
    children}:{children:React.ReactNode
})=>{
    return (
        <div className="h-full">
            <div className="max-sm:hidden md:flex h-full w-[72px] z-30 flex-col md:fixed md:inset-y-0">
                <NavigationSideBar/>
            </div>
            
        <main className="md:pl-[72px] p-0 h-full">
            {children}
        </main>
        </div>
    )
}

export default MainLayout