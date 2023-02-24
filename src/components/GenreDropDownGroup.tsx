import React, {useState} from "react";
import styled from "styled-components";


const DropDownContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  width: 340px;
  height: 56px;
  position: relative;

  background: rgba(255, 121, 0, 0.1);
  border-radius: 12px;
  border: 2px solid #e5e5e5;
`;

const DropDownHeader = styled("div")`
  font-family: NunitoRegular, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 22px;
  color: #0F0701;
  padding: 0px 15px;
  gap: 19px;
  border-radius: 12px;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  transform: translateY(40px);
  width: 100%;
  left: 0;
  z-index: 1;
`;

const DropDownList = styled("ul")`
  font-family: NunitoRegular, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 22px;
  color: #0F0701;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  gap: 19px;

  background: rgb(255, 241, 229);
  border-radius: 12px;
  border: 2px solid #e5e5e5;

  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ["Жанр1", "Жанр2", "Жанр3"];

export default function GenreDropDownGroup() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value: any) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>
                {selectedOption || "Обрати жанр"}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {options.map(option => (
                            <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
}