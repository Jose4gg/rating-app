import { useCallback, useEffect } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { uniqBy } from "lodash";

export const productState = atom({
  key: "product_state",
  default: null,
});

export const useProductWithReview = () => {
  const [product, setProduct] = useRecoilState(productState);

  useEffect(() => {
    const search = async () => {
      const data = await fetch("/product_with_reviews").then((data) =>
        data.json()
      );

      setProduct(data);
    };
    search();
  }, []);

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
    [product]
  );
};
