import React, { useState } from "react";
import style from "./Booking.module.css";
import { useDispatch } from "react-redux";
import addUser from "../../store/actions/action";

const Booking = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    mobileNo: "",
    aadharNo: "",
    address: "",
    days: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((currValue) => {
      return {
        ...currValue,
        [name]: value,
      };
    });
  };

  const handleAdd = () => {
    dispatch(addUser(userInfo));
    setUserInfo({
      name: "",
      email: "",
      mobileNo: "",
      aadharNo: "",
      address: "",
      days: "",
    });
  };
  return (
    <div className={style.container}>
      <div className={style.details}>
        <h1 className={style.title}>Customer Details</h1>
        <div className={style.input}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
          />
        </div>
        1 <br />
        <div className={style.input}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className={style.input}>
          <label htmlFor="mobileNo">Mobile No</label>
          <input
            type="number"
            name="mobileNo"
            value={userInfo.mobileNo}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className={style.input}>
          <label htmlFor="aadharNo">Aadhar No</label>
          <input
            type="text"
            name="aadharNo"
            value={userInfo.aadharNo}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className={style.input}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={userInfo.address}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className={style.input}>
          <label htmlFor="checkIn">Check-In</label>
        </div>
        <br />
        <div className={style.input}>
          <label htmlFor="days">No of Days</label>
          <input
            type="text"
            name="days"
            value={userInfo.days}
            onChange={handleChange}
          />
        </div>
        <div className={style.addUser}>
          <button className={style.addUserButton} onClick={handleAdd}>
            Book a Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
