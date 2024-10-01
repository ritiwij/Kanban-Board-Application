import React from "react";

import "./List.css";
import Card from "../Card/Card";
import doneicon from "../../Assets/Images/Done.svg";
import cancelicon from "../../Assets/Images/Cancelled.svg";
import progressicon from "../../Assets/Images/in-progress.svg";
import todoicon from "../../Assets/Images/To-do.svg";
import backlogicon from "../../Assets/Images/Backlog.svg";
import zeroicon from "../../Assets/Images/zero.svg";
import highicon from "../../Assets/Images/High.svg";
import lowicon from "../../Assets/Images/Low.svg";
import mediumicon from "../../Assets/Images/Medium.svg";
import urgenticon from "../../Assets/Images/Urgent.svg";
import addicon from "../../Assets/Images/add.svg";
import optionicon from "../../Assets/Images/Option.svg";

let cardCount = 0;

export default function List(props) {
  return (
    <>
      <div className="list-container">
        <div className="list-header">
          <div className="list-header-left">
            {
              {
                status: (
                  <>
                    {
                      {
                        Backlog: (
                          <div className="list-icon">
                            <img src={backlogicon} alt="icon" />
                          </div>
                        ),
                        Todo: (
                          <div className="list-icon">
                            <img src={todoicon} alt="icon" />
                          </div>
                        ),
                        "In progress": (
                          <div className="list-icon">
                            <img src={progressicon} alt="icon" />
                          </div>
                        ),
                        Done: (
                          <div className="list-icon">
                            <img src={doneicon} alt="icon" />
                          </div>
                        ),
                        Cancelled: (
                          <div className="list-icon">
                            <img src={cancelicon} alt="icon" />
                          </div>
                        ),
                      }[props.listTitle]
                    }{" "}
                  </>
                ),
                user: <></>,
                priority: (
                  <>
                    {
                      {
                        0: (
                          <div className="card-tag-icon">
                            <img src={zeroicon} alt="icon" />
                          </div>
                        ),
                        1: (
                          <div className="card-tag-icon">
                            <img src={lowicon} alt="icon" />
                          </div>
                        ),
                        2: (
                          <div className="card-tag-icon">
                            <img src={mediumicon} alt="icon" />
                          </div>
                        ),
                        3: (
                          <div className="card-tag-icon">
                            <img src={highicon} alt="icon" />
                          </div>
                        ),
                        4: (
                          <div className="card-tag-icon">
                            <img src={urgenticon} alt="icon" />
                          </div>
                        ),
                      }[props.listTitle]
                    }{" "}
                  </>
                ),
              }[props.groupValue]
            }

            <div className="list-title">
              {
                {
                  priority: (
                    <>
                      {props.priorityList
                        ? props.priorityList.map((priorityProperty) =>
                            priorityProperty.priority === props.listTitle ? (
                              <>{priorityProperty.name}</>
                            ) : null
                          )
                        : null}
                    </>
                  ),
                  status: <>{props.listTitle}</>,
                  user: <>{props.listTitle}</>,
                }[props.groupValue]
              }
            </div>
            <div className="list-sum">{cardCount}</div>
          </div>
          <div className="list-header-right">
            <div className="list-add-item">
              <img src={addicon} alt="icon" />
            </div>
            <div className="list-option-item">
              <img src={optionicon} alt="icon" />
            </div>
          </div>
        </div>

        <div className="list-card-items">
          {props.ticketDetails.map((ticket) => {
            if (ticket.status === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            } else if (ticket.priority === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            } else if (ticket.userObj.name === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            }
            return null;
          }, (cardCount = 0))}
        </div>
      </div>
    </>
  );
}
