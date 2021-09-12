import { useCallback, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { uniqBy } from "lodash";
import { createReviewSub } from "../channels/review_channel";

export const productState = atom({
  key: "product_state",
  default: null,
});

export const useProductWithReview = () => {
  const [product, setProduct] = useRecoilState(productState);
  const setNewReview = useSetNewReviewToProduct();

  useEffect(() => {
    const search = async () => {
      const data = await fetch("/product_with_reviews").then((data) =>
        data.json()
      );

      setProduct(data);
    };
    search();
  }, []);

  useEffect(() => {
    const sub = createReviewSub({
      received(data) {
        setNewReview(JSON.parse(data));
      },
    });
    return () => {
      sub.unsubscribe();
    };
  }, [setNewReview]);

  return product;
};

export const useSetNewReviewToProduct = () => {
  const [product, setProduct] = useRecoilState(productState);

  return useCallback(
    (review) => {
      setProduct({
        ...review.product,
        reviews: uniqBy([...product.reviews, review], "id"),
      });
    },
    [product, setProduct]
  );
};
