const Skeleton = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-4xl rounded-md border border-zinc-300 p-4 my-4">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-4 rounded bg-gray-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-8 rounded bg-gray-200"></div>
                <div className="col-span-1 h-8 rounded bg-gray-200"></div>
              </div>
              <div className="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-4xl rounded-md border border-zinc-300 p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-4 rounded bg-gray-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-8 rounded bg-gray-200"></div>
                <div className="col-span-1 h-8 rounded bg-gray-200"></div>
              </div>
              <div className="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
