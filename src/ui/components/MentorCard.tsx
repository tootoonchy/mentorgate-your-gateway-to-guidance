"use client";
/*
 * Documentation:
 * Mentor Card — https://app.subframe.com/a079ae2fd283/library?component=Mentor+Card_4b0965fd-820e-45b4-b204-f0be9197ac52
 */

import React from "react";
import { FeatherAward } from "@subframe/core";
import { FeatherBriefcase } from "@subframe/core";
import { FeatherGlobe } from "@subframe/core";
import { FeatherMapPin } from "@subframe/core";
import { FeatherTrophy } from "@subframe/core";
import { FeatherZap } from "@subframe/core";
import * as SubframeUtils from "../utils";

interface MentorCardRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "role"> {
  coverImage?: string;
  avatarImage?: string;
  availabilityText?: React.ReactNode;
  name?: React.ReactNode;
  flag?: React.ReactNode;
  role?: React.ReactNode;
  company?: React.ReactNode;
  location?: React.ReactNode;
  languages?: React.ReactNode;
  experience?: React.ReactNode;
  showTopBadge?: boolean;
  showTrophyBadge?: boolean;
  showVerifiedBadge?: boolean;
  showAllBadges?: boolean;
  availabilityStyle?: "pill" | "dot" | "ring" | "icon";
  className?: string;
}

const MentorCardRoot = React.forwardRef<HTMLDivElement, MentorCardRootProps>(
  function MentorCardRoot(
    {
      coverImage,
      avatarImage,
      availabilityText,
      name,
      flag,
      role,
      company,
      location,
      languages,
      experience,
      showTopBadge = false,
      showTrophyBadge = false,
      showVerifiedBadge = false,
      showAllBadges = false,
      availabilityStyle = "pill",
      className,
      ...otherProps
    }: MentorCardRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/4b0965fd flex w-full flex-col items-start gap-2",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full max-w-[320px] flex-col items-start overflow-hidden rounded-md bg-default-background shadow-lg relative">
          <div className="flex h-24 w-full flex-none flex-col items-start rounded-t-md bg-gradient-to-br from-[#1a3a3a] to-[#2d5a5a] relative">
            {coverImage ? (
              <img
                className="min-h-[0px] w-full grow shrink-0 basis-0 rounded-t-md object-cover absolute inset-0"
                src={coverImage}
              />
            ) : null}
          </div>
          <div className="flex items-end gap-1 absolute right-4 top-20 z-30">
            <div
              className={SubframeUtils.twClassNames(
                "hidden flex-col items-center",
                { flex: showAllBadges || showTopBadge }
              )}
            >
              <div className="flex h-5 w-5 flex-none items-center justify-center bg-neutral-900">
                <span className="font-['Inter'] text-[6px] font-[700] leading-[9px] text-white">
                  TOP
                </span>
              </div>
              <div className="flex h-0 w-0 flex-none items-start border-l-[10px] border-r-[10px] border-t-[6px] border-l-transparent border-r-transparent border-t-neutral-900" />
            </div>
            <div
              className={SubframeUtils.twClassNames(
                "hidden flex-col items-center",
                { flex: showAllBadges || showTrophyBadge }
              )}
            >
              <div className="flex h-5 w-5 flex-none items-center justify-center bg-[#ffd836]">
                <FeatherAward className="text-caption font-caption text-neutral-900" />
              </div>
              <div className="flex h-0 w-0 flex-none items-start border-l-[10px] border-r-[10px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#FFD836]" />
            </div>
            <div
              className={SubframeUtils.twClassNames(
                "hidden flex-col items-center",
                { flex: showAllBadges || showVerifiedBadge }
              )}
            >
              <div className="flex h-5 w-5 flex-none items-center justify-center bg-[#d2def7]">
                <FeatherTrophy className="text-caption font-caption text-neutral-900" />
              </div>
              <div className="flex h-0 w-0 flex-none items-start border-l-[10px] border-r-[10px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#D2DEF7]" />
            </div>
          </div>
          <div className="flex w-full flex-col items-start px-4 -mt-12 relative z-20">
            <div className="flex flex-col items-start relative">
              <div
                className={SubframeUtils.twClassNames(
                  "flex h-20 w-20 flex-none items-center justify-center overflow-hidden rounded-full border-2 border-solid border-white bg-neutral-200",
                  {
                    "border-2 border-solid border-success-500":
                      availabilityStyle === "ring",
                  }
                )}
              >
                {avatarImage ? (
                  <img
                    className="min-w-[0px] grow shrink-0 basis-0 self-stretch object-cover"
                    src={avatarImage}
                  />
                ) : null}
              </div>
              <div
                className={SubframeUtils.twClassNames(
                  "flex items-center gap-1 rounded-full bg-[#d5f2da] px-1.5 py-0.5 absolute -bottom-1 left-1/2 -translate-x-1/2",
                  {
                    hidden:
                      availabilityStyle === "icon" ||
                      availabilityStyle === "ring" ||
                      availabilityStyle === "dot",
                  }
                )}
              >
                <FeatherZap className="font-['Inter'] text-[8px] font-[400] leading-[12px] text-[#3b6643]" />
                {availabilityText ? (
                  <span className="whitespace-nowrap font-['Inter'] text-[8px] font-[400] leading-[12px] text-[#3b6643]">
                    {availabilityText}
                  </span>
                ) : null}
              </div>
              <div
                className={SubframeUtils.twClassNames(
                  "hidden h-4 w-4 flex-none items-center justify-center rounded-full border-2 border-solid border-white bg-success-500 absolute bottom-0 right-0",
                  { flex: availabilityStyle === "dot" }
                )}
              />
              <div
                className={SubframeUtils.twClassNames(
                  "hidden h-5 w-5 flex-none items-center justify-center rounded-full border-2 border-solid border-white bg-[#d5f2da] absolute bottom-0 right-0",
                  { flex: availabilityStyle === "icon" }
                )}
              >
                <FeatherZap className="font-['Inter'] text-[10px] font-[400] leading-[15px] text-[#3b6643]" />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 px-4 pt-4 pb-3">
            <div className="flex w-full flex-col items-start gap-1">
              <div className="flex items-center gap-2">
                {name ? (
                  <span className="text-body-bold font-body-bold text-default-font">
                    {name}
                  </span>
                ) : null}
                {flag ? (
                  <span className="text-body font-body text-default-font">
                    {flag}
                  </span>
                ) : null}
              </div>
              <div className="flex items-center gap-1">
                {role ? (
                  <span className="text-caption font-caption text-default-font">
                    {role}
                  </span>
                ) : null}
                <span className="text-caption font-caption text-subtext-color">
                  ·
                </span>
                {company ? (
                  <span className="text-caption font-caption text-default-font">
                    {company}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-2">
              <div className="flex items-center gap-1">
                <FeatherMapPin className="text-body font-body text-neutral-800" />
                {location ? (
                  <span className="text-caption font-caption text-neutral-800">
                    {location}
                  </span>
                ) : null}
              </div>
              <div className="flex items-center gap-1">
                <FeatherGlobe className="text-body font-body text-neutral-800" />
                {languages ? (
                  <span className="text-caption font-caption text-neutral-800">
                    {languages}
                  </span>
                ) : null}
              </div>
              <div className="flex items-center gap-1">
                <FeatherBriefcase className="text-body font-body text-neutral-800" />
                {experience ? (
                  <span className="text-caption font-caption text-neutral-800">
                    {experience}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex h-10 w-full flex-none items-center justify-center bg-[#1a1a1a] cursor-pointer hover:bg-neutral-800 active:bg-[#1A1A1A]">
            <span className="text-body font-body text-white">View Profile</span>
          </div>
        </div>
      </div>
    );
  }
);

export const MentorCard = MentorCardRoot;
