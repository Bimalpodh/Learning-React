const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap mx-40">
      {Array.from({ length: 100 }, (_, i) => (
        <div key={i} className="shimmer-card h-72 w-60 bg-gray-300 m-4"></div>
      ))}
    </div>
  );
};

export default Shimmer;
