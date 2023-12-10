"use client";

import { ShowMoreProps } from "@/types";
import { CustomButton } from ".";
import { updateFilterParams } from "@/utils";
import { useRouter } from "next/navigation";

const ShowMore = ({ limit, isNext }: ShowMoreProps) => {
    const router = useRouter()
  const handleClickShowMore = () => {
    // to update the limit in pathname
    const newPathName = updateFilterParams("limit",`${(limit+1)*10}`);
    router.push(newPathName)
  };
  return (
    <div className="w-full mt-10 flex-center gap-5">
      {!isNext && (
        <CustomButton
          title="Show More"
          handleClick={handleClickShowMore}
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
        />
      )}
    </div>
  );
};

export default ShowMore;
