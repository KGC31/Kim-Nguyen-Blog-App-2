import React from "react";
// import { TweenMax, Power3, Power4 } from "gsap";
import { useEffect } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Box from "@mui/material/Box";

gsap.registerPlugin(ScrollTrigger);

function ServiceType() {
	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 })

			const animation = gsap.to(".photo:not(:first-child)", {
				opacity: 1, scale: 1, duration: 1, stagger: 1
			})

			ScrollTrigger.create({
				trigger: ".gallery",
				start: "top top",
				end: "bottom bottom",
				pin: ".rightblock",
				animation: animation,
				scrub: true,
			})
		})
		return () => ctx.revert();
	}, [])
	return (
    <>
      <p className='text-black text-center w-full py-10'>[WORKS]</p>
      <React.Fragment>
        <Box className="gallery" sx={{ display: "flex" }}>
          <Box className="left m-0" sx={{
            width: "50%",
            marginLeft: "auto",
            "& .details": {
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "40vw",
              marginLeft: "auto",
              color: "#000",
              fontSize: "3rem",
              fontWeight: 900,
            }
          }}>
            <Box className="details">
              Chuyen Bao Loc Basketball Landing Page
            </Box>
            <Box className="details">
              Geo Quest
            </Box>
          </Box>
          <Box className="rightblock" sx={{
            width: "50%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
            <Box sx={{
              width: "40vw",
              height: "40vw",
              position: "relative",
              "& .photo": {
                position: "absolute",
                width: "100%",
                height: "100%",
                "& img": {
                  height: "100%",
                  width: "100%",
                }
              }
            }}>
              <Box className="photo">
                <img
                  className="object-contain"
                  src="/images/CBL-BC thumbnail.png"
                  alt="img-1" />
              </Box>
              <Box className="photo">
                <img
                  className="object-contain"
                  src="/images/Geo Quest.png"
                  alt="img-2" />
              </Box>
            </Box>
          </Box>
        </Box>
      </React.Fragment >
    </>
	);
}

export default ServiceType;