import React, { createContext, useState, useContext, ReactNode } from "react";

interface SearchContextProps {
  query: string;
  setQuery: (query: string) => void;
  result: any[];
  setResult: (result: any[]) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<any>([]);

  return (
    <SearchContext.Provider value={{ query, setQuery, result, setResult }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("SearchProvider is not mounted");
  }

  console.log("context", context);

  return context;
};
