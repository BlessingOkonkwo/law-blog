import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CreateArticleForm from "@/components/create-article/create-article-form";
import { expect, it } from "vitest";

it("Tests Submit", async () => {
  const app = render(<CreateArticleForm />);

  const authorNameInput = app.getByLabelText("author-name");
  const emailInput = app.getByLabelText("author-email");
  const articleDescription = app.getByLabelText("author-email");
  const articleTitle = app.getByLabelText("author-email");

  // Insert username and password
  fireEvent.change(authorNameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, {
    target: { value: "theblessingokonkwo@gmail.com" },
  });
  fireEvent.change(articleDescription, { target: { value: "Description" } });
  fireEvent.change(articleTitle, { target: { value: "Title" } });

  // Click the button
  await userEvent.click(screen.getByRole("button"));

  // Expect the button o be submitted
  expect(screen.getByRole("button").innerHTML).toBe("Submitted");
});
