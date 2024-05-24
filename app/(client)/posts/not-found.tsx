import Header from "@/app/components/Header";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <Header title="404 - Página não encontrada." />
      <div>
        <Link href={"/"}>Voltar para Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
