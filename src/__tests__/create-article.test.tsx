import { describe, it, expect, test } from "vitest";
import { render } from "@testing-library/react";
import CreateArticle from "@/pages/create-article";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Providers } from "@/redux/provider";

test("demo", () => {
  expect(true).toBe(true);
});

describe("render", () => {
  it("renders the create page", () => {
    render(
      <Providers>
        <BrowserRouter>
          <Routes>
            <Route path="create-article" element={<CreateArticle />} />
          </Routes>
        </BrowserRouter>
      </Providers>
    );
    expect(true).toBeTruthy();
  });
});
