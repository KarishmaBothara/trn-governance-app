const imgImage4 = "/figma:asset/eec25f7c6f1aee614474c86e987fcba856145bfc.png";

export default function DashboardLoggedOut() {
  return (
    <div
      className="bg-gradient-to-b from-[#081017] relative size-full to-[#09090b]"
      data-name="Dashboard - Logged out"
    >
      <div
        className="absolute bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] blur-[75px] bottom-0 filter h-[2461px] translate-x-[-50%] w-[4237px]"
        data-name="image 4"
        style={{
          left: "calc(54.167% - 11.5px)",
          backgroundImage: `url('${imgImage4}')`,
        }}
      />
    </div>
  );
}