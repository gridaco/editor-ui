import React from "react";
import { create as _create } from "react-modal-promise";
//
export function showDialog(d) {
  _create(d)();
}
export const create = _create;
