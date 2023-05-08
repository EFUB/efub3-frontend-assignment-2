import React, { useState, useEffect } from "react";
import GuestCreate from "../components/GuestCreate";
import GuestList from "../components/GuestList";
import styled from "styled-components";

const GuestBook = () => {
    // localStorage에서 guestList 불러오기
    const [guestList, setGuestList] = useState(() => {
        const localGuestList = localStorage.getItem("localGuestList");
        return localGuestList ? JSON.parse(localGuestList) : [];
    });

    // localStorage에 guestList 저장
    useEffect(() => {
        localStorage.setItem("localGuestList", JSON.stringify(guestList));
    }, [guestList]);

    return (
        <>
            <TitleText>방명록</TitleText>
            <GuestList guestList={guestList} setGuestList={setGuestList} />
            <GuestCreate guestList={guestList} setGuestList={setGuestList} />
        </>
    );
};

const TitleText = styled.h1`
    text-align: center;
`;

export default GuestBook;