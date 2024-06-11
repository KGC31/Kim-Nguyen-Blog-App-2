"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 text-white md:h-screen md:overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <h1 className="border border-white text-8xl md:text-[13rem] xl:text-[15rem] text-justify">
                DROP ME A LINE
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 border border-white">
                    <h1 className="text-4xl my-5">LOCATION</h1>
                    <p>HO CHI MINH CITY</p>
                    <p>341 Cao Dat, District 5</p>
                </div>
                <div className="p-10 border border-white">
                    <h1 className="text-4xl my-5">CONTACT</h1>
                    <p>kimnguyenblc@gmail.com</p>
                    <p>(+84)916 722 263</p>
                    <p>(+84)792 289 221</p>
                </div>
                <div className="p-10 border border-white">
                    <h1 className="text-4xl my-5">Menu</h1>
                    <p><a href="/">Home</a></p>
                    <p><a href="/blog">Blog</a></p>
                    <p><a href="/login">Login</a></p>
                    <p><a href="/register">Register</a></p>
                </div>
                <div className="p-10 border border-white">
                    <h1 className="text-4xl my-5">STALK ME</h1>
                    <p><a href="https://www.facebook.com/KGC31.dev/">Facebook</a></p>
                    <p><a href="https://www.instagram.com/kimnguyen30.dev/">Instagram</a></p>
                    <p><a href="https://github.com/KGC31">Github</a></p>
                    <p><a href="https://www.linkedin.com/in/kim-n-943326282/">LinkedIn</a></p>
                </div>
            </div>
        </motion.div>
    );
}
