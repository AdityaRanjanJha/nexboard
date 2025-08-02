import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
const LayoutPage = ({
    children
}:{children : React.ReactNode}) => {
    return (
        <div className="flex items-center justify-center h-full bg-slate-100">
            <Navbar/>
            <main className="h-full flex flex-col items-center justify-center pt-14">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default LayoutPage;