"use client";
import Image from "next/image";
import React from "react";
import InputMask from "react-input-mask";

import Util from "../../assets/img/utils.png";
import Daraxt from "../../assets/img/daraxt.png";

function Utils(props) {
  return (
    <section>
      <div className="flex flex-col">
        <h2>Utilitalar</h2>
        <div className="flex">
          <div className="img1">
            <Image src={Util} alt="img" />
          </div>
          <div className="img1">
            <Image src={Daraxt} alt="img" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start">
        <h2>Ekspress to`lov</h2>
        <form>
          <div className="inp">
            <label htmlFor="tel">Telefon raqami</label>
            <InputMask mask="+\9\98 (99) 999-99-99" maskChar="_">
              {(inputProps) => (
                <input
                className=""
                  {...inputProps}
                  type="text"
                  name="tel"
                  id="tel"
                  placeholder="+998 (_) ___-__-__"
                />
              )}
            </InputMask>
          </div>
          <div className="inp">
            <label htmlFor="sum">To`lov miqdori</label>
            <InputMask
        mask="9 999 999 999"
        maskChar="_"
        placeholder="10 000"
        value={props.amount}
        onChange={props.onChange}
      >
        {(inputProps) => <input {...inputProps} />}
      </InputMask>
          </div>
        </form>
      </div>
      Utils
    </section>
  );
}

export default Utils;
