import React from "react";
import { ACTIONS } from "../App";

export default function DigitButton({ dispatch, digit }) {
    return (
        <button
            className={digit === "." ? "corner-left" : ""}
            onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
            }
        >
            {digit}
        </button>
    );
}
