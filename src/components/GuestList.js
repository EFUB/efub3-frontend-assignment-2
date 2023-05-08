import GuestItem from "./GuestItem";
import styled from "styled-components";

const GuestList = ({ guestList, setGuestList }) => {
    return (
        <GuestListBlock>
            {guestList.map((item) => {
                return (
                    <GuestItem
                        text={item.text}   
                        name={item.name}
                        key={item.id}
                        id={item.id}
                        pw={item.pw}
                        guestList={guestList}
                        setGuestList={setGuestList}
                    />
                );
            })}
        </GuestListBlock>
    );
};
const GuestListBlock = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 1em;
    border-top: 1px solid darkgray;
`;

export default GuestList;