import Image from "next/image";
import { StaticImageData } from "next/image";

import Container from "@components/Container";
import Chip from "@components/Chip";
import Navbar from "@components/navbar/Navbar";
import SignUpButton from "@components/buttons/SignUpButton";
import Carrousel from "@components/Carrousel";
import Card from "@components/Card";
import TableTopCrypto from "@components/tables/TableTopCrypto";
import Newsletter from "@components/NewsLetter";

import shape from "../public/images/shape.svg";
import logo from "../public/images/logo.svg";
import newsletterShape from "../public/images/newsletter-shape.svg";

import boy from "../public/images/boy.webp";
import girl from "../public/images/girl.webp";

const images: StaticImageData[] = [girl, boy];

export default function Home() {
  return (
    <>
      <Navbar />
      <>
        <section className="md:pt-15 relative pt-10 xl:pt-20">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-24">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-center md:text-left text-primary-500 mb-2 md:mb-4 lg:mb-6 sm:mb-3 font-bold text-h1-sm  md:text-h1-md lg:text-h1-lg leading-h1-sm md:leading-h1-md lg:leading-h1-lg">
                  Lorem ipsum dolor sit amet, consectetur
                </h1>
                <h5 className="px-2 text-center text-base mb-6 lg:mb-8 md:px-0 md:text-left md:max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor
                </h5>
                <SignUpButton
                  label="Sign Up Now"
                  className="h-10 px-16 uppercase btn-sm mb-6 md:mb-10 lg:mb-20"
                  textClass="text-base font-bold"
                  icon="BsArrowRightShort"
                />
                <div className="flex flex-row gap-x-4 md:gap-x-6 lg:gap-x-8">
                  <Chip title="Cryptos" />
                  <Chip title="NFTs" />
                  <Chip title="Games " />
                </div>
              </div>
              <div className="relative hidden flex-row md:flex">
                <div className="absolute right-0 h-full w-full">
                  <Carrousel
                    images={images}
                    options={{ align: "start", inViewThreshold: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
        <div className="left-0 -z-10 mt-10 w-screen">
          <Image
            priority
            className="w-screen"
            alt="background image for first section"
            src={shape}
          />
        </div>
        <section id="about-us" className="bg-hero-gradient">
          <Container>
            <div className="md:py-15 py-14 xl:pb-28 xl:pt-32">
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr]">
                <div className="order-2 flex flex-row gap-y-8 overflow-auto sm:grid sm:grid-rows-2 lg:order-1">
                  <div className="flex flex-row gap-4 sm:grid sm:grid-cols-[1fr,1fr,auto] sm:gap-8">
                    <Card
                      iconType="btc"
                      title="For your company"
                      subtitle="Crypto Solutions"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
                    />
                    <Card
                      iconType="solutions"
                      title="For your company"
                      subtitle="Crypto Solutions"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
                    />
                    <div className="sm:w-3 xl:w-7 2xl:w-14" />
                  </div>
                  <div className="flex flex-row gap-4 sm:grid sm:grid-cols-[auto,1fr,1fr] sm:gap-8">
                    <div className="sm:w-3 xl:w-7 2xl:w-14" />
                    <Card
                      iconType="graph"
                      title="For your company"
                      subtitle="Crypto Solutions"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
                    />
                    <Card
                      iconType="computer"
                      title="For your company"
                      subtitle="Crypto Solutions"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
                    />
                  </div>
                </div>
                <div className="order-1 flex flex-col justify-center md:ml-8 md:px-10 lg:order-2 lg:w-10/12 lg:px-0">
                  <h5 className="mb-1 font-bold text-primary-500">
                    Lorem ipsum
                  </h5>
                  <h2 className="mb-4">Lorem ipsum</h2>
                  <p className="mb-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor
                  </p>
                  <div className="mb-10 hidden lg:mb-0 lg:block">
                    <SignUpButton className=" h-12 px-11" label="Sign up now" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section id="top-cryptos">
          <Container>
            <div className="md:py-15 py-14 xl:pb-28 xl:pt-32">
              <TableTopCrypto
                headerMobile={["Crypto", "Actions"]}
                header={["#", "Crypto", "Price", "Change", "Trade"]}
              />
            </div>
          </Container>
        </section>
        <section className="relative bg-newsletter-gradient">
          <div className="md:py-15 z-10 py-14 xl:pb-28 xl:pt-32">
            <div className="absolute left-0 top-0 z-10 h-full w-screen">
              <Image
                priority
                className="h-full w-full object-cover"
                alt="background image for first section"
                src={newsletterShape}
              />
            </div>

            <Container>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-x-8 lg:gap-x-60">
                <div className="z-20 mb-10 sm:mb-0 lg:ml-20">
                  <h4 className="mb-1 font-bold text-primary-200">
                    Lorem ipsum
                  </h4>
                  <h2 className="mb-4 font-bold text-white">Lorem upsum</h2>
                  <p className="font-normal text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor
                  </p>
                </div>
                <div className="z-20 my-auto lg:mr-20">
                  <Newsletter />
                </div>
              </div>
            </Container>
          </div>
        </section>
        <footer className="bg-white">
          <Container>
            <div className="my-6 flex flex-col items-center justify-between sm:flex-row">
              <p className="hidden sm:block">
                Copyright © 2022 - All rights reserved
              </p>
              <div>
                <Image alt="Logo" src={logo} />
              </div>
            </div>
          </Container>
        </footer>
      </>
    </>
  );
}
