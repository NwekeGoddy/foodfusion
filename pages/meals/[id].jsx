import React from "react";
import classes from "./meals.module.scss";
import Image from "next/image";
import Text from "@/components/text/Text";
import Title from "@/components/text/Title";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/router";
import axios from "axios";
import PointText from "@/components/text/PointText";

const getSingleMeal = async ({ queryKey }) => {
  const { data } = await axios.get(`/lookup.php?i=${queryKey[1]}`);
  return data?.meals?.[0];
};

function SingleMealPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError, error } = useQuery(
    ["singleMeal", id],
    getSingleMeal
  );

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  if (isLoading || !data) {
    <BeatLoader color="#fff" />;
  }

  return (
    <div className={classes.pageWrapper}>
      <div className={classes.topContainer}>
        <div className={classes.img}>
          <Image
            alt="each image"
            src={data.strMealThumb}
            height={300}
            width={300}
          ></Image>
        </div>
        <div className={classes.info}>
          <Title variant={"primary"}>{data.strMeal}</Title>
          <PointText className={classes.infoText}>
            Category: {data.strCategory}
          </PointText>
          <PointText className={classes.infoText}>
            Area: {data.strArea}
          </PointText>
          <PointText className={classes.infoText}>
            Tags: {data?.strTags?.split(',').join(', ')}
          </PointText>
        </div>
      </div>

      <div className={classes.ingredientsTable}>

      </div>
    </div>
  );
}

export default SingleMealPage;
