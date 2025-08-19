import type React from "react";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LoadingScreen: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[100] bg-pattern-block">
        <i className="nes-pokeball is-large animate-spin-nes"></i>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingScreen;
