const LayoutPage = ({
    children
}:{children : React.ReactNode}) => {
    return (
        <div className="flex items-center justify-center h-full bg-slate-100">
            <main className="h-full flex flex-col items-center justify-center">
                {children}
            </main>
        </div>
    )
}

export default LayoutPage;