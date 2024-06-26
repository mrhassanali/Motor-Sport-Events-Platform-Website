import React, { useEffect } from "react";
import { Header, Hero, Card, MobileMenu, Tabs, Timer } from "../../components";
import CarRacingImage from "../../assets/images/car-racing.jpeg";
import { Container } from "../../Atoms";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setGeneral } from "../../store/slices/Card/cardSlice";
import GeneralAdmission from "../../data/GeneralAdmission.json";

export default function Home() {
  const tabs = useAppSelector((state) => state.tabs);
  const { general } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (tabs.active.id === 1) {
      dispatch(setGeneral(GeneralAdmission));
    }
  }, [tabs, dispatch]);

  return (
    <>
      <section className="bg-cover bg-center bg-no-repeat relative md:h-[40rem] base:h-[84vh] "
        style={{ backgroundImage: `url(${CarRacingImage})` }}>
        <div className="backdrop-blur-lg">
          <Header />
        </div>
        <Hero />
        <div className="absolute top-16 right-4 hidden md:block">
          <Timer />
        </div>
      </section>

      <Container>
        <Tabs />
        <div className="w-full mt-5 inline-flex gap-x-3 items-center">
          <h1 className="text-2xl font-bold text-black">
            {tabs?.active?.name}
          </h1>
          <div className="rounded-full w-fit border border-red-500 px-3 text-[#d31f22]">
            {tabs?.active?.count} Tickets
          </div>
        </div>
      </Container>

      <Container>
        {tabs.active.id === 1 && (
          <div className="grid md:grid-cols-3 base:grid-cols-1 mt-4 gap-10">
            {general.map((item, index) => {
              return <Card data={item} key={index} />;
            })}
          </div>
        )}
      </Container>

      <div className="md:hidden ">
        <MobileMenu />
      </div>
    </>
  );
}
