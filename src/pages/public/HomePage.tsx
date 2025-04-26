const HomePage = () => {
  return (
    <div className='pageTemplate1 '>
      <div className='  flex flex-col md:flex-row  justify-center items-center border-4 bg-white border-white rounded-[100px]   md:rounded-[100px] ring-4 ring-purple-600 pt-10  '>
        <div className='w-auto flex-1 flex flex-col justify-center items-start gap-8 ml-16 -mt-8 '>
          <h1 className='text-2xl md:text-4xl  font-bold text-transparent bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text'>
            Asset Management App
          </h1>
          <h1 className='text-[18px] leading-6 font-bold '>A Home for assets 💻  🖱️ 🖨️ 🖥️</h1>
          <div className='space-y-1 text-[15px] leading-6 font-bold '>
            <h1>This project is built with</h1>
            <h1 className='text-2xl leading-[48px] font-normal text-transparent bg-gradient-to-tr from-[#DAC6FB] to-[#AAC1F6] bg-clip-text'>
              ASP.NET Core 7, React & TypeScript
            </h1>
            <h1 className='text-xl leading-6'>With <span className=" font-normal text-transparent bg-gradient-to-tr from-[#DAC6FB] to-[#AAC1F6] bg-clip-text" >JWT</span>  authentication and authorization</h1>
          </div>
        </div>
        <div className='flex-1 flex flex-col justify-center items-end'>
          <img src='images/yazakiLog.png' className='w-[380px] h-[300px] object-contain rounded-3xl pr-10 ' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;