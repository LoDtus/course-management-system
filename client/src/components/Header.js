import '../App.css';

function Header() {
    return (
        <header className="header flex justify-center border-b">
            <div className="container-header flex items-center justify-between px-4 py-4 bg-white">
                <span className='font-semibold text-2xl'>Project: Course Management System</span>
                <form action="" className='flex items-center'>
                    <svg className='w-[20px] h-[20px] relative left-[38px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                    </svg>
                    <input
                        type="text"
                        className='border py-2 pr-3 pl-12 w-[500px] rounded-md'
                        placeholder='Nhập vào đây'
                    />
                    <input
                        type="submit"
                        name=""
                        value="Tìm kiếm"
                        className='bg-[#0614f5] text-white font-semibold rounded-md hover:cursor-pointer
                        hover:bg-[#3843f7] py-2 px-6 ml-2'
                    />
                </form>
            </div>
        </header>
    )
}
export default Header;