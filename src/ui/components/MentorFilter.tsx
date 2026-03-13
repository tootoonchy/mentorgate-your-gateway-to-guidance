"use client";
/*
 * Documentation:
 * Button — https://app.subframe.com/a079ae2fd283/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Mentor Filter — https://app.subframe.com/a079ae2fd283/library?component=Mentor+Filter_f24fc732-2952-4309-99ab-3b2ed6bb3902
 */

import React from "react";
import { FeatherChevronDown } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";
import { FeatherX } from "@subframe/core";
import * as SubframeUtils from "../utils";
import { Button } from "./Button";

interface FilterChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  selected?: boolean;
  className?: string;
}

const FilterChip = React.forwardRef<HTMLDivElement, FilterChipProps>(
  function FilterChip(
    { label, selected = false, className, ...otherProps }: FilterChipProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/e6f59090 flex cursor-pointer items-center gap-2 rounded-full border border-solid border-neutral-border px-3 py-2 hover:bg-neutral-50",
          {
            "border border-solid border-brand-600 bg-brand-50 hover:bg-brand-100":
              selected,
          },
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {label ? (
          <span
            className={SubframeUtils.twClassNames(
              "text-caption-bold font-caption-bold text-default-font",
              { "text-brand-700": selected }
            )}
          >
            {label}
          </span>
        ) : null}
        <FeatherChevronDown
          className={SubframeUtils.twClassNames(
            "text-caption font-caption text-subtext-color",
            { "text-brand-700": selected }
          )}
        />
      </div>
    );
  }
);

interface MentorFilterRootProps extends React.HTMLAttributes<HTMLDivElement> {
  searchPlaceholder?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const MentorFilterRoot = React.forwardRef<
  HTMLDivElement,
  MentorFilterRootProps
>(function MentorFilterRoot(
  {
    searchPlaceholder,
    children,
    className,
    ...otherProps
  }: MentorFilterRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-4",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <div className="flex w-full items-center gap-4 mobile:flex-col mobile:flex-nowrap mobile:items-start mobile:justify-start mobile:gap-4">
        <div className="flex grow shrink-0 basis-0 items-center gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-3 py-2 mobile:grow-0">
          <FeatherSearch className="text-body font-body text-subtext-color" />
          {searchPlaceholder ? (
            <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
              {searchPlaceholder}
            </span>
          ) : null}
        </div>
        <Button variant="neutral-primary" icon={<FeatherSearch />}>
          Search
        </Button>
      </div>
      <div className="flex h-px w-full flex-none items-start bg-neutral-border" />
      <div className="flex w-full items-center gap-3">
        <span className="text-body-bold font-body-bold text-default-font">
          Filters:
        </span>
        {children ? (
          <div className="flex grow shrink-0 basis-0 flex-wrap items-center gap-2">
            {children}
          </div>
        ) : null}
        <Button variant="neutral-tertiary" size="small" icon={<FeatherX />}>
          Clear all
        </Button>
      </div>
    </div>
  );
});

export const MentorFilter = Object.assign(MentorFilterRoot, {
  FilterChip,
});
