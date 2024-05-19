import React from "react";
import imagelayanan from "../assets/imagelayanan.png";
const Layanan = () => {
    return (
    <div className="mt-12">
        <h3 className="font-bold pt-12 text-center">Layanan</h3>
        <br/><h1 className="font-bold text-4xl text-gray-500 text-center">Layanan Masalah Kesehatan Mental yang Kami Sediakan</h1>
                <div className="">
                <div className="flex flex-col gap-y-0 m-2">
                <img src={imagelayanan} alt="" className="pt-6 grid grid-cols-1 " />
                </div>
            </div>
    </div>
    );
};

export default Layanan;