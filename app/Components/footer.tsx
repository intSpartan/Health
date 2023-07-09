const Footer = () => {
    return (
        <footer className='z-10 py-10 text-stone-400'>
            <div className='container'>
                <h5 className='text-lg'>HeathApp</h5>
                <p className='mt-4 text-sm text-stone-500'>
                    &copy; {new Date().getFullYear()} HeathApp
                </p>
            </div>
        </footer>
    )
}

export default Footer