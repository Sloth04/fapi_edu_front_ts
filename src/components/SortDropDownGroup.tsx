import React, {useState} from "react";
import styled from "styled-components";


const DropDownContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  padding: 0px 15px;
  width: 340px;
  height: 56px;
  position: relative;
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
`;

const DropDownListContainer = styled("div")`
  z-index: 1;
  position: absolute;
  transform: translate(15px, -130px);
  width: 100%;
  left: 0;
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
  padding: 0px 15px;
  gap: 19px;

  border: 2px solid #e5e5e5;

  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = [
    "По даті публікації",
    "По автору від А до Я",
    "По автору від Я до А",
    "По назві від A до Я",
    "По назві від Я до А"];

export default function SortDropDownGroup() {
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
                {selectedOption || "По даті публікації"}
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