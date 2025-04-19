import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function ScrollMap() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Find Us <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Anywhere You Are!
                            </span>
                        </h1>
                    </>
                }>
                <img
                    src={`https://img.freepik.com/free-photo/top-view-travel-map-airplane_23-2149617644.jpg?t=st=1744825755~exp=1744829355~hmac=1299f66bed188f367878469a9d3a2094d72940828698fc64a683e2bf1623874d&w=1380`}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false} />
            </ContainerScroll>
        </div>
    );
}
