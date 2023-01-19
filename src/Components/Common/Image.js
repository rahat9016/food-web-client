import React, { useRef } from "react";
import { AiFillFileImage } from "react-icons/ai";
import { BsCloudArrowUpFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

const Image = (props) => {
  const fileRef = useRef(null);
  return (
    <div className="flex flex-col items-center w-full  px-3 py-3">
      <input
        ref={fileRef}
        hidden
        type="file"
        onChange={props.handleImage}
        value={props.value}
        multiple={props.multiple}
      />

      <BsCloudArrowUpFill
        onClick={() => fileRef.current.click()}
        className="text-5xl text-[#f799a3] hover:text-[#e8808a] cursor-pointer"
      />
      <p
        className="text-[#f799a3] cursor-pointer font-nunito font-bold"
        onClick={() => fileRef.current.click()}
      >
        Browse File to Upload
      </p>
      {props.offersPicture && props.offersPicture ? (
        <div className="bg-rose-300 text-rose-600 w-full h-10 rounded-md flex items-center justify-center relative gap-1">
          <AiFillFileImage />
          {props.offersPicture?.name}
        </div>
      ) : (
        <p className="text-[#333] text-sm">Only PNG support</p>
      )}
    </div>
  );
};

export default Image;
