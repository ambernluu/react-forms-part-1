import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {
    render(<BoxList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

function addBox(boxList, width = '150', height = '150', backgroundColor = 'cyan') {
    const widthInput = boxList.getByLabelText("Width (px)");
    const heightInput = boxList.getByLabelText('Height (px)');
    const backgroundInput = boxList.getByLabelText('Background Color');

    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    fireEvent.change(backgroundInput, { target: { value: backgroundColor } });
    const button = boxList.getByText('Create New Box!');
    fireEvent.click(button);

}

it("can add box", function () {
    const boxList = render(<BoxList />);

    expect(boxList.queryByText('Remove Box')).not.toBeInTheDocument();

    addBox(boxList);

    const removeButton = boxList.getByText('Remove Box');
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
    width: 150px;
    height: 150px;
    background-color: cyan;
  `);

    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);

});