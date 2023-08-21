const RouterInfo = ({ to }: { to?: string }) => {
  return (
    <div className="border-x-[4px] border-x-black bg-[#FFDB58] h-[70vh] flex justify-center items-center">
      <h1 className="text-4xl font-semibold">
        Redirecting to {to ? to : "another page"}...
      </h1>
    </div>
  );
};

export default RouterInfo;
