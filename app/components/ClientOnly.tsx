"use client";

import React, { useState, useEffect } from "react";

interface IClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<IClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};

export default ClientOnly;
