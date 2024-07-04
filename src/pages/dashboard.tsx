import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import graphSvg from "../assets/graph.svg";
import { ReactComponent as AccountIcon } from "../assets/icons/account.svg";
import { ReactComponent as AddAccountIcon } from "../assets/icons/add-account.svg";
import { ReactComponent as ChartIcon } from "../assets/icons/chart.svg";
import { ReactComponent as CircleAddIcon } from "../assets/icons/circle-add.svg";
import { ReactComponent as ClockIcon } from "../assets/icons/clock.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { ReactComponent as FastTruckIcon } from "../assets/icons/fast-truck.svg";
import { ReactComponent as ListIcon } from "../assets/icons/list.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location.svg";
import { ReactComponent as UserAccountIcon } from "../assets/icons/user-account.svg";
import progressSvg from "../assets/progess.svg";

const Dashboard = () => {
  return (
    <>
      <BreadcrumbsItem to="/dashboard">
        <span>Dashboard</span>
      </BreadcrumbsItem>

      <div className="flex flex-col grow">
        <div className="pb-3">
          <h3 className="text-4xl font-bold">Dashboard</h3>
        </div>
        <div className="text-xl pb-4">
          <span className="font-bold">Welcome, User</span>
        </div>
        {/* Start: Body */}
        <div className="grow pt-2 -my-4">
          {/* End: cards */}
          <div className="flex text-[#344767] py-4 -mx-4">
            <div className="w-1/3 px-4">
              <div className="pt-2">
                <div className="relative bg-[#fff] rounded-xl shadow-[0px_2px_6px_0px_#00000040] min-w-[320px]">
                  <div
                    className="flex items-center justify-center w-[64px] h-[64px] absolute left-[16px] -translate-y-1/4 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(225.58deg, #549DCD 7.84%, #2A4F67 85.19%)",
                    }}
                  >
                    <UserAccountIcon fill="#fff" />
                  </div>
                  <div className="flex flex-col items-end p-4">
                    <span className="text-sm font-light">Total Orders</span>
                    <span className="py-1 text-2xl font-bold">256</span>
                  </div>
                  <div className="border-t" />
                  <div className="font-light p-4">
                    <span className="text-[#4CAF50] font-bold pe-1">+55%</span>
                    than last week
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 px-4">
              <div className="pt-2">
                <div className="relative bg-[#fff] rounded-xl shadow-[0px_2px_6px_0px_#00000040] min-w-[320px]">
                  <div
                    className="flex items-center justify-center w-[64px] h-[64px] absolute left-[16px] -translate-y-1/4 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(221.89deg, #279D4F 25.2%, #0E371C 100%)",
                    }}
                  >
                    <ChartIcon fill="#fff" />
                  </div>
                  <div className="flex flex-col items-end p-4">
                    <span className="text-sm font-light">Orders Delivered</span>
                    <span className="py-1 text-2xl font-bold">700</span>
                  </div>
                  <div className="border-t" />
                  <div className="font-light p-4">
                    <span className="text-[#4CAF50] font-bold pe-1">+3%</span>
                    than last week
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 px-4">
              <div className="pt-2">
                <div className="relative bg-[#fff] rounded-xl shadow-[0px_2px_6px_0px_#00000040] min-w-[320px]">
                  <div
                    className="flex items-center justify-center w-[64px] h-[64px] absolute left-[16px] -translate-y-1/4 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(225.51deg, #FF6262 19.69%, #993B3B 87.51%)",
                    }}
                  >
                    <AddAccountIcon fill="#fff" />
                  </div>
                  <div className="flex flex-col items-end p-4">
                    <span className="text-sm font-light">Orders Pending</span>
                    <span className="py-1 text-2xl font-bold">+124</span>
                  </div>
                  <div className="border-t" />
                  <div className="font-light p-4">Just updated</div>
                </div>
              </div>
            </div>
          </div>
          {/* End: cards */}

          {/* Start: Other cards */}
          <div className="flex py-4 -mx-4 -my-4 text-[#2A4F67]">
            <div className="w-2/3 px-4 py-4 -my-4 flex flex-col">
              <div className="grow flex py-4 -mx-4 -my-4">
                <div className="w-1/2 px-4 py-4">
                  <div
                    className="relative rounded-3xl p-4 pt-2 min-w-[320px] border-b-[5px] border-[#00000042] h-full"
                    style={{
                      background:
                        "linear-gradient(241.54deg, rgba(138, 187, 221, 0.2) 0%, rgba(74, 101, 119, 0.2) 100%)",
                    }}
                  >
                    <span className="absolute top-[14px] right-[20px]">
                      <CloseIcon fill="#00000091" />
                    </span>
                    <div className="text-xl text-center font-bold">
                      <span className="inline-flex flex-col items-center justify-center text-center">
                        Loading Sheet
                        <span className="w-[70%] h-[2px] rounded bg-[#B3B5BF]"></span>
                      </span>
                    </div>
                    <div className="text-lg pb-1">Orders</div>
                    <div className="flex flex-col gap-3 text-[#fff]">
                      <div className="flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040] bg-[#549DCD75] rounded-xl p-2.5">
                        <div className="border-2 border-[#fff] p-1 font-bold w-[32px] h-[32px] flex items-center justify-center rounded-full">
                          1
                        </div>
                        <div className="grow text-center flex items-center justify-center text-2xl">
                          ID: #12345
                        </div>
                      </div>
                      <div className="flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040] bg-[#549DCD75] rounded-xl p-2.5">
                        <div className="border-2 border-[#fff] p-1 font-bold w-[32px] h-[32px] flex items-center justify-center rounded-full">
                          2
                        </div>
                        <div className="grow text-center flex items-center justify-center text-2xl">
                          ID: #12345
                        </div>
                      </div>
                      <div className="flex items-center justify-center shadow-[0px_4px_4px_0px_#00000040] bg-[#549DCD75] rounded-xl p-2.5">
                        <div className="border-2 border-[#fff] p-1 font-bold w-[32px] h-[32px] flex items-center justify-center rounded-full">
                          3
                        </div>
                        <div className="grow text-center flex items-center justify-center text-2xl">
                          ID: #12345
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 px-4 py-4">
                  <div
                    className="relative flex flex-col rounded-3xl h-full min-w-[320px] p-4 pt-2 border-b-[5px] border-[#00000042]"
                    style={{
                      background:
                        "linear-gradient(241.54deg, rgba(138, 187, 221, 0.2) 0%, rgba(74, 101, 119, 0.2) 100%)",
                    }}
                  >
                    <span className="absolute top-[14px] right-[20px]">
                      <CloseIcon fill="#00000091" />
                    </span>
                    <div className="text-xl text-center font-bold">
                      <span className="inline-flex flex-col items-center justify-center text-center">
                        Fleet Management
                        <span className="w-[70%] h-[2px] rounded bg-[#B3B5BF]"></span>
                      </span>
                    </div>
                    <div className="text-lg pb-3">Drivers</div>
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-3">
                        <div className="w-[44px] h-[44px] flex items-center justify-center rounded-lg overflow-hidden shadow-[0px_2px_6px_0px_#00000040]">
                          <img src="images/profile1.png" alt="" />
                        </div>
                        <div className="grow flex flex-col text-3xl">
                          <div className="text-sm font-bold">Jayson</div>
                          <div className="text-xs text-[#7B809A]">
                            Hi! I need more information..
                          </div>
                        </div>
                        <div className="text-[#E91F63] font-bold">REPLY</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-[44px] h-[44px] flex items-center justify-center rounded-lg overflow-hidden shadow-[0px_2px_6px_0px_#00000040]">
                          <img src="images/profile1.png" alt="" />
                        </div>
                        <div className="grow flex flex-col text-3xl">
                          <div className="text-sm font-bold">Jayson</div>
                          <div className="text-xs text-[#7B809A]">
                            Hi! I need more information..
                          </div>
                        </div>
                        <div className="text-[#E91F63] font-bold">REPLY</div>
                      </div>
                    </div>
                    <div className="grow" />
                    <div className="flex justify-around pt-4 px-1 text-[#0062A5]">
                      <button className="bg-[#fff] text-xs shadow-[0px_4px_4px_0px_#00000040] py-1.5 px-4 rounded-xl">
                        Add
                      </button>
                      <button className="bg-[#fff] text-xs shadow-[0px_4px_4px_0px_#00000040] py-1.5 px-4 rounded-xl">
                        Edit
                      </button>
                      <button className="bg-[#fff] text-xs shadow-[0px_4px_4px_0px_#00000040] py-1.5 px-4 rounded-xl">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow flex py-4 -mx-4">
                <div className="w-1/2 px-4">
                  <div
                    className="relative flex flex-col rounded-3xl h-full min-w-[320px] p-2 pt-2 border-b-[5px] border-[#00000042]"
                    style={{
                      background:
                        "linear-gradient(241.54deg, rgba(138, 187, 221, 0.2) 0%, rgba(74, 101, 119, 0.2) 100%)",
                    }}
                  >
                    <span className="absolute top-[14px] right-[20px]">
                      <CloseIcon fill="#00000091" />
                    </span>
                    <div className="text-xl text-center font-bold">
                      <span className="inline-flex flex-col items-center justify-center text-center">
                        Delivery Sales
                        <span className="w-[70%] h-[2px] rounded bg-[#B3B5BF]"></span>
                      </span>
                    </div>
                    <div className="text-lg h-full p-3">
                      <div
                        className="p-3 rounded h-full flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(180deg, #B2E9B5 45.86%, #648366 100%)",
                        }}
                      >
                        <img src={graphSvg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 px-4 -my-4 flex flex-col">
                  <div className="grow py-4">
                    <div
                      className="relative flex flex-col rounded-3xl h-full min-w-[320px] p-2 pt-2 border-b-[5px] border-[#00000042]"
                      style={{
                        background:
                          "linear-gradient(241.54deg, rgba(138, 187, 221, 0.2) 0%, rgba(74, 101, 119, 0.2) 100%)",
                      }}
                    >
                      <span className="absolute top-[14px] right-[20px]">
                        <CloseIcon fill="#00000091" />
                      </span>
                      <div className="text-xl text-center font-bold">
                        <span className="inline-flex flex-col items-center justify-center text-center">
                          Order Tracking
                          <span className="w-[70%] h-[2px] rounded bg-[#B3B5BF]"></span>
                        </span>
                      </div>
                      <div className="text-lg text-[#000] px-4 flex flex-col gap-4">
                        <div className="flex">
                          <span>
                            <FastTruckIcon fill="#000" />
                          </span>
                          <span className="text-xl grow text-center">
                            ID: #101100
                          </span>
                        </div>
                        <div className="text-[10px] leading-normal">
                          <img src={progressSvg} className="w-full" alt="" />
                          <div className="flex justify-between text-[#0062A5]">
                            <span>From</span>
                            <span>To</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Kitchener, ON</span>
                            <span>Toronoto, ON</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grow py-4">
                    <div
                      className="relative flex flex-col rounded-3xl h-full min-w-[320px] min-h-[60px] p-2 pt-2 border-b-[5px] border-[#00000042]"
                      style={{
                        background:
                          "linear-gradient(241.54deg, rgba(138, 187, 221, 0.2) 0%, rgba(74, 101, 119, 0.2) 100%)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 px-4 py-4">
              <div
                className="relative flex flex-col rounded-3xl h-full min-w-[320px] p-2 pt-2 border-b-[5px] border-[#00000042]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(138, 187, 221, 0.144) 0%, rgba(74, 101, 119, 0.288) 100%)",
                }}
              >
                <span className="absolute top-[14px] right-[20px]">
                  <CloseIcon fill="#00000091" />
                </span>
                <div className="text-xl text-center font-bold">
                  <span className="inline-flex flex-col items-center justify-center text-center">
                    Create a new Route
                    <span className="w-[70%] h-[2px] rounded bg-[#B3B5BF]"></span>
                  </span>
                </div>
                <form className="text-lg text-[#000] p-4 py-3 flex flex-col gap-5">
                  <div className="flex flex-col px-3 py-1 rounded-lg bg-[#BAA7ED33] border-[2px] border-[#B3B5BF] font-bold">
                    <label
                      htmlFor="route_name"
                      className="text-[#0062A5] text-sm drop-shadow-[0px_4px_4px_0px_#00000040]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="bg-transparent outline-none text-lg"
                      name="route_name"
                      placeholder="John Jaynen"
                      id="route_name"
                    />
                  </div>
                  <div className="text-[10px] leading-normal font-bold">
                    <div className="uppercase">Route Type</div>
                    <div className="text-xs flex flex-wrap -mx-1">
                      <div className="w-1/2 py-2 px-1">
                        <div className="bg-[#C7C7C7] rounded-[20px] p-4">
                          Shortest Path
                        </div>
                      </div>
                      <div className="w-1/2 py-2 px-1">
                        <div className="bg-[#C7C7C7] rounded-[20px] p-4">
                          Fastest Route
                        </div>
                      </div>
                      <div className="w-1/2 py-2 px-1">
                        <div className="bg-[#C7C7C7] rounded-[20px] p-4">
                          Multi-stop Route
                        </div>
                      </div>
                      <div className="w-1/2 py-2 px-1">
                        <div className="bg-[#C7C7C7] rounded-[20px] p-4">
                          Other
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] leading-normal font-bold">
                    <div className="uppercase">Route Details</div>
                    <div className="text-xs flex flex-col -mx-1 py-1.5 px-1">
                      <div className="flex items-center pt-2 px-1 text-lg">
                        <span className="p-1">
                          <ClockIcon fill="#292D32" />
                        </span>
                        <div className="ps-3 pe-2">2:00 PM</div>
                        <div className="ps-2">4:00PM</div>
                      </div>
                      <div className="flex flex-col ps-11 text-[9px] text-[#00000080]">
                        <div className="">Thursday, May 30</div>
                        <div className="flex gap-1.5">
                          <AccountIcon fill="#4D4D4D" />
                          <AccountIcon fill="#4D4D4D" />
                          <AccountIcon fill="#4D4D4D" />
                          <CircleAddIcon stroke="#4D4D4D" strokeOpacity={1} />
                        </div>
                      </div>
                    </div>
                    <div className="text-xs flex flex-wrap -mx-1 py-3 px-1">
                      <div className="flex items-center pt-2 px-1 text-lg">
                        <LocationIcon fill="#000" fillOpacity={0.6} />
                        <div className="ps-3">Add Location</div>
                      </div>
                    </div>
                    <div className="text-xs flex flex-wrap -mx-1 py-1.5 px-1">
                      <div className="flex items-center pt-2 px-1 text-lg">
                        <ListIcon fill="#000" fillOpacity={0.6} />
                        <div className="ps-3">Add Description</div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        className="bg-[#4500FF] text-[#fff] text-xl px-8 py-2.5 rounded-[20px]"
                        type="submit"
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* End: Other cards */}
        </div>
        {/* End: Body */}
      </div>
    </>
  );
};

export default Dashboard;
