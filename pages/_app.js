import Layout from "@/components/Layout/Layout";
import { useEffect } from "react";
import axios from "axios";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { getSingleMeal } from "./meals/[id]";
axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    },
  },
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem("savedMeals")) {
      const savedMeals = JSON.parse(localStorage.getItem("savedMeals"));
      savedMeals.forEach((mealId) => {
        queryClient.prefetchQuery(["singleMeal", mealId], getSingleMeal);
      });
    }else{
      localStorage.setItem("savedMeals", JSON.stringify([]));
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="bottom-right"
        toastOptions={{
          styles: {
            fontSize: "1.4rem",
          },
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
