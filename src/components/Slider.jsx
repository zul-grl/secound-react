"use client";
import { useState } from "react";
const images = [
  "./slider1.png",
  "./slider2.jpeg",
  "./slider3.png",
  "./slider4.png",
];
export default function Slider() {
  const [image, setimage] = useState(images[0]);
  return (
    <div className="ads" style={{ backgroundImage: `url(${image})` }}>
      <div className="dotcontainer">
        <div>
          {images.map((img, index) => {
            return (
              <button
                key={index}
                className="dot"
                onClick={() => setimage(img)}
                style={{
                  backgroundColor: "#7e57c2",
                  opacity: img === image ? 3 : 0.5,
                }}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
const sliderimg = ["./cardslider1.png", "./cardslider2.png"];
export function Slider2() {
  const [image, setimage] = useState(sliderimg[0]);
  return (
    <div className="ads-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="dotcontainer">
        <div>
          {sliderimg.map((img, index) => {
            return (
              <button
                key={index}
                className="dot"
                onClick={() => setimage(img)}
                style={{
                  backgroundColor: "#7e57c2",
                  opacity: img === image ? 3 : 0.5,
                }}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
const slider3img = ["./column1.png", "./column2.png"];
export function Slider3() {
  const [image, setimage] = useState(slider3img[0]);
  return (
    <div className="ads3-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="dotcontainer">
        <div>
          {slider3img.map((img, index) => {
            return (
              <button
                key={index}
                className="dot"
                onClick={() => setimage(img)}
                style={{
                  backgroundColor: "#7e57c2",
                  opacity: img === image ? 3 : 0.5,
                }}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
