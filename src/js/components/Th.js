import React from "react";
import cx from "classnames";


const Th = (props) => {
  let ascClass =props.sortItems.items !== props.sortlEle ? "":props.sortItems.type ==="asc"?"sorting":"notSorting";
  let descClass = props.sortItems.items !== props.sortlEle ? "":props.sortItems.type ==="desc"?"sorting":"notSorting";

  return (
    <th onClick={props.handleClick} width={props.width}>
      <span>{props.showName}</span>
      <i className={cx("fa", "fa-sort-asc",ascClass)} aria-hidden="true"></i>
      <i className={cx("fa", "fa-sort-desc",descClass)} aria-hidden="true"></i>
    </th>
	)
}
export default Th;
