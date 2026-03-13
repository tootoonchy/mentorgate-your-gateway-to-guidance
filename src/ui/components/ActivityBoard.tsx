"use client";
/*
 * Documentation:
 * Activity Board — https://app.subframe.com/a079ae2fd283/library?component=Activity+Board_c42b0466-fc4d-42c0-a15b-a62f060b0cb9
 */

import React from "react";
import * as SubframeUtils from "../utils";

interface ActivityBoardRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  months?: React.ReactNode;
  activityGrid?: React.ReactNode;
  legend?: React.ReactNode;
  className?: string;
}

const ActivityBoardRoot = React.forwardRef<
  HTMLDivElement,
  ActivityBoardRootProps
>(function ActivityBoardRoot(
  {
    title,
    months,
    activityGrid,
    legend,
    className,
    ...otherProps
  }: ActivityBoardRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-200 bg-white px-6 py-6",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {title ? (
        <span className="text-heading-3 font-heading-3 text-default-font">
          {title}
        </span>
      ) : null}
      <div className="flex w-full flex-col items-start gap-2">
        {months ? (
          <div className="flex flex-col items-start gap-2">{months}</div>
        ) : null}
        {activityGrid ? (
          <div className="flex w-full flex-col items-start gap-2">
            {activityGrid}
          </div>
        ) : null}
        {legend ? (
          <div className="flex flex-col items-start gap-2">{legend}</div>
        ) : null}
      </div>
    </div>
  );
});

export const ActivityBoard = ActivityBoardRoot;
