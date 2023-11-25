import styled from "styled-components";
export const Container = styled("div")((id) => {
  const isOnline = id.el % 2 === 0;
  return {
    textAlign: "center",
    backgroundColor: "purple",
    h1: {
      color: isOnline ? "navy" : "aquamarine",
    },
  };
});
