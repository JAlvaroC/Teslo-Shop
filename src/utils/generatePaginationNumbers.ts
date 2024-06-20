import React from "react";
// [1,2,3,4,5,...,7]
// [1,2,3,4,5,...,50]
export const generatePaginationNumbers = (
  currentPage: number,
  totalPages: number
) => {
  // Si el numero total de paginas es 7 o menos
  // Vamos a mostrar todas las paginas sin puntos suspensivos
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1); //[1,2,3,4,5,6...,7]
  }
  //   Si la pagina actual esta entre las primeras paginas
  // mostrar las primeras 3,puntos suspensivos
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages]; //[1,2,3,4,'...',49,50]
  }
  //Si la pagina actual esta entre las ultimas 3
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, -1, totalPages];
  }
  //   Si la pagina actual esta en otro lugar medio
  //   mostrar la primera agina,puntos suspensivos,la pagina actual y vecinos

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
