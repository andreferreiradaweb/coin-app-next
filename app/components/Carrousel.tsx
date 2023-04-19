"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import ClassNames from "embla-carousel-class-names";

type CarrouselProps = {
  images: StaticImageData[];
  options?: EmblaOptionsType;
};

type Axis = "x" | "y";

const classNamesOptions = { selected: "active" };
const wheelGestureOptions = {
  forceWheelAxis: "y" as Axis,
  speed: 1,
};

const Carrousel: React.FC<CarrouselProps> = (props) => {
  const { images, options } = props;
  const [active, setActive] = useState<number>(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    WheelGesturesPlugin(wheelGestureOptions),
    ClassNames(classNamesOptions),
  ]);

  const onSelect = (e: any) => {
    setActive(emblaApi?.selectedScrollSnap() || 0);
  };

  emblaApi?.on("select", onSelect);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((item, i) => (
            <div
              data-prev={i < active}
              className="embla__slide data-[prev='true']:invisible"
              key={item.src}
            >
              <Image
                className="embla__slide__img h-full w-full"
                height={499}
                width={384}
                src={item.src}
                alt="Image Carrousel Home"
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
